import React, { useEffect } from "react";
import { PostContext } from "../contexts/PostContext";
import { useContext } from "react";

const Dashboard = () => {
    // get Context:
    const {
        postState: { posts, postsLoading },
        getPosts,
    } = useContext(PostContext);

    // Start get all post:
    useEffect(() => getPosts(), []);

    return (
        <div className="">
            <div className="">Dashboard</div>
        </div>
    );
};

export default Dashboard;
