import Link from "next/link";
import { exercisesData } from "./data";

export default function ChallengeListPage() {
  return (
    <div>
      <h1>エクササイズ一覧</h1>
      <ul>
        {Object.keys(exercisesData).map((exerciseKey) => (
          <li key={exerciseKey}>
            <Link href={`/exercises/challenge/${exerciseKey}`}>
              {exercisesData[exerciseKey].title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
