import React from "react";
import toast from 'react-hot-toast';

import { path_find } from "../../workers/json_finder";

interface params {
    result: path_find;
}

export const ResultDiv: React.FC<params> = ({result}) => {
    const copy_object = (data:string, location:string) => {
        navigator.clipboard.writeText(data);
        toast(`${location} copied!`, {  position: "bottom-right", icon: '✅' });
    };

    return (
        <div className="result-zone">
            <div onClick={() => {copy_object(result.path, "Path")}}>
                <label className="result-label"><strong>Path</strong>: {result.path}</label>
            </div>
            <div onClick={() => {copy_object(result.type, "Type")}}>
                <label className="result-label"><strong>Type</strong>: {result.type}</label>
            </div>
            <div onClick={() => {copy_object(result.value, "Value")}}>
                <label className="result-label"><strong>Value</strong>: {result.value}</label>
            </div>
        </div>
    );
};