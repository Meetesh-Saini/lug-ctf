import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import LeaderboardCards from '../components/leaderboardCard/leaderboardCards';

import LoadingAnimation from '../components/loadingAnimation/loadingAnimation';
import { socket } from '../websocket';

export default function Leaderboard() {
    const [teams, setTeams] = useState(null);
    const { apiPostGetJsonAsTeam } = useFetch();

    useEffect(() => {
        socket.on("update-score", (data) => {
            data = JSON.parse(data);
            setTeams(data.teams);
            console.log(data);
        })
    }, []);

    return (
        <>
            <h1>Leaderboard</h1>
            {teams ? (
                teams.length > 0 ? (
                    <LeaderboardCards teams={teams} />
                ) : (
                    <>no teams have registered yet</>
                )
            ) : (
                <LoadingAnimation />
            )}
        </>
    );
}

