import { useEffect, useState } from "react";
import Reveal from "./Reveal";
import { ExternalLink } from "lucide-react";

export default function CompetitiveProgramming() {
    const [leetcode, setLeetCode] = useState(null);
    const [cf, setCF] = useState(null);
    const [cc, setCC] = useState(null);

    useEffect(() => {
        fetch("https://leetcode-stats-api.herokuapp.com/SubhaM_Giri")
            .then(res => res.json())
            .then(data => setLeetCode(data));
    }, []);

    useEffect(() => {
        fetch("https://codeforces.com/api/user.info?handles=Skryy")
            .then(res => res.json())
            .then(data => setCF(data.result[0]));
    }, []);

    useEffect(() => {
        fetch("https://codechef-api.vercel.app/user/subham_giri")
            .then(res => res.json())
            .then(data => setCC(data))
            .catch(e => console.log("CodeChef API fallback"));
    }, []);

    return (
        <Reveal>
            <div className="w-full max-w-5xl mt-20 text-center">
                <h2 className="text-2xl font-bold">Competitive Programming</h2>
                <p className="opacity-70 mt-2">
                    Live ratings fetched automatically from LC • CF • CC
                </p>

                <div className="grid md:grid-cols-3 gap-6 mt-10">

                    <div className="p-5 border rounded-xl bg-white dark:bg-gray-900 shadow">
                        <h3 className="font-bold text-xl text-purple-500">LeetCode</h3>
                        {leetcode ? (
                            <>
                                <p className="mt-2 text-lg opacity-90">
                                    Rating: <span className="font-bold">{leetcode.rating}</span>
                                </p>
                                <p className="opacity-70">Total Solved: {leetcode.totalSolved}</p>
                            </>
                        ) : (
                            <p className="opacity-70 mt-2">Loading...</p>
                        )}

                        <a
                            href="https://leetcode.com/SubhaM_Giri"
                            target="_blank"
                            className="flex gap-2 items-center justify-center mt-4 text-purple-400 hover:underline"
                        >
                            View Profile <ExternalLink size={16} />
                        </a>
                    </div>

                    <div className="p-5 border rounded-xl bg-white dark:bg-gray-900 shadow">
                        <h3 className="font-bold text-xl text-purple-500">Codeforces</h3>
                        {cf ? (
                            <>
                                <p className="mt-2 text-lg opacity-90">
                                    Rating: <span className="font-bold text-purple-400">{cf.rating}</span>
                                </p>
                                <p className="opacity-70">Max Rating: {cf.maxRating}</p>
                                <p className="opacity-70 capitalize">Rank: {cf.rank}</p>
                            </>
                        ) : (
                            <p className="opacity-70 mt-2">Loading...</p>
                        )}

                        <a
                            href="https://codeforces.com/profile/Skryy"
                            target="_blank"
                            className="flex gap-2 items-center justify-center mt-4 text-purple-400 hover:underline"
                        >
                            View Profile <ExternalLink size={16} />
                        </a>
                    </div>

                    <div className="p-5 border rounded-xl bg-white dark:bg-gray-900 shadow">
                        <h3 className="font-bold text-xl text-purple-500">CodeChef</h3>

                        {cc && cc.userDetails ? (
                            <>
                                <p className="mt-2 text-lg opacity-90">
                                    Rating: <span className="font-bold">{cc.userDetails.rating}</span>
                                </p>
                                <p className="opacity-70">Stars: ⭐ {cc.userDetails.stars}</p>
                                <p className="opacity-70">Highest: {cc.userDetails.highest_rating}</p>
                            </>
                        ) : (
                            <p className="opacity-70 mt-2">Loading...</p>
                        )}

                        <a
                            href="https://www.codechef.com/users/subham_giri"
                            target="_blank"
                            className="flex gap-2 items-center justify-center mt-4 text-purple-400 hover:underline"
                        >
                            View Profile <ExternalLink size={16} />
                        </a>
                    </div>

                </div>
            </div>
        </Reveal>
    );
}
