"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

const CrispChat = () => {
    useEffect(() => {
        Crisp.configure("9b54138f-e861-4c42-92d0-8ef8ff579d73");
    }, []);

    return null;
}

export default CrispChat
