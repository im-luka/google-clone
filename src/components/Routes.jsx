import React from "react";
import { Routes as Switch, Route, Navigate } from "react-router-dom";
import Results from "./Results";

const Routes = () => {
  return (
    <div className="p-4">
      <Switch>
        <Route exact path="/" element={<Navigate replace to="/search" />} />

        <Route path="/search" element={<Results />} />
        <Route path="/images" element={<Results />} />
        <Route path="/news" element={<Results />} />
        <Route path="/videos" element={<Results />} />
      </Switch>
    </div>
  );
};

export default Routes;
