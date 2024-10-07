// components/CommunityFeed.js
import { useEffect, useState } from "react";

export default function CommunityFeed() {
  return (
    <div className="flex flex-col">
      <h2>Community Activities</h2>
      {activities.map((activity) => (
        <div key={activity.id} className="flex flex-col">
          <h3>{activity.title}</h3>
          <p>{activity.description}</p>
          <small>{new Date(activity.date).toLocaleString()}</small>
        </div>
      ))}
    </div>
  );
}

const activities = [
  {
    id: 1,
    title: "Community Event",
    description: "Community Event Description",
    date: "2022-01-01T12:00:00Z",
  },
  {
    id: 2,
    title: "Community Discussion",
    description: "Community Discussion Description",
    date: "2022-01-02T12:00:00Z",
  },
  {
    id: 3,
    title: "Community Resource",
    description: "Community Resource Description",
    date: "2022-01-03T12:00:00Z",
  },
];
