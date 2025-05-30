import { useAtom } from "jotai";
import { ApplicationsAtom } from "../context/Applications";

const useApplications = () => {
  const [applications, setApplications] = useAtom(ApplicationsAtom);

  function get() {
    return applications;
  }

  function set() {}

  return { get, set };
};
