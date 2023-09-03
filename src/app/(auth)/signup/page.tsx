"use client";
import { EXAMPLE_DATA, exampleActions } from "@/datastore";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

const Page = () => {
  const dispatch = useDispatch();
  const exampleData = useSelector(EXAMPLE_DATA);
  console.log("✌️exampleData --->", exampleData);
  return (
    <div
      onClick={() => {
        dispatch(exampleActions.decrement());
      }}
    >
      signup page{exampleData}
    </div>
  );
};

export default Page;
