import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollTop() {
    const { pathname } = useLocation();
    useEffect(e => window.scrollTo(0, 0), [pathname]);

    return null;
}