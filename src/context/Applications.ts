import { atom } from "jotai";
import type { Application } from "../types/Application";

export const ApplicationsAtom = atom<Application[]>([]);
