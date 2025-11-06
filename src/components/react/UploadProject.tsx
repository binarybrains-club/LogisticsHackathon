import { UPLOAD_PROJECT_DATE } from "../../utils/config.ts";
import { Button } from "../ui/button.tsx";
import {
  useEffect, // @ts-types="react"
  useState,
} from "react";
export function UploadProjectButton() {
  const [showButton, setShowButton] = useState(false);
  useEffect(() => {
    const now = new Date();
    setShowButton(now > UPLOAD_PROJECT_DATE);
  }, []);
  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      setShowButton(now > UPLOAD_PROJECT_DATE);
    }, 1_000);
    return () => {
      clearInterval(interval);
    };
  }, []);
  if (!showButton) return null;
  return (
    <Button variant="secondary" disabled>
      <a
        href="https://docs.google.com/forms/d/e/1FAIpQLSf-5sWj9Mwf-Hi50hEBDd97uBvCK-tiuRaEBGpfbxsQK71yCQ/viewform"
        target="_blank"
      >
        Subir proyecto
      </a>
    </Button>
  );
}
