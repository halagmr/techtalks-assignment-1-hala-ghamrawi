"use client";

import { useState } from "react";

const JoinButton = () => {
    const [joined, setJoined] = useState(false);

    return (
        <button
            onClick={() => setJoined(!joined)}
            className={`mt-6 rounded-lg px-6 py-3 font-medium text-white transition-colors ${joined
                    ? "bg-green-500 hover:bg-green-600"
                    : "bg-purple-600 hover:bg-purple-700"
                }`}
        >
            {joined ? "Joined ✓" : "Join Community"}
        </button>
    );
};

export default JoinButton;