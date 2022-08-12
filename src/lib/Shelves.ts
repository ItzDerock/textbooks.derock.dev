import fs from 'fs';
import { GradeManifest } from '../types/Mainifest';

export function getAllShelves() {
    return JSON.parse(
        fs.readFileSync('./src/data/shelves.json', 'utf8')
    ) as GradeManifest[];
}