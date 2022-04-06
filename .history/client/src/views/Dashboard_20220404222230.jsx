import React from "react";
import { PostContext } from "../contexts/PostContext";
import { useContext } from "react";

const Dashboard = () => {
    // get Context:
    const {
        postState: { posts, postsLoading },
        getPosts,
    } = useContext(PostContext);

    return (
        <div className="">
            <div className="">Dashboard</div>
        </div>
    );
};

export default Dashboard;
