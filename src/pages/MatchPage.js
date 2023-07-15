import { React, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MatchDetailCard } from "../components/MatchDetailCard";

export const MatchPage = () => {
  const [matches, setMatches] = useState([]);
  const { teamName, year } = useParams();

  useEffect(() => {
    const fetchMatches = async () => {
      const response = await fetch(
        `http://localHost:8080/api/team/${teamName}/matches?year=${year}`
      );
      const data = await response.json();
      setMatches(data);
    };
    fetchMatches();
  }, []);

  return (
    <div className="MatchPage">
      <h1>Match Page</h1>
      {
        matches&&matches.map(match => (
            <MatchDetailCard teamName = {teamName} match={match} />
          ))
      }
    </div>
  );
};
