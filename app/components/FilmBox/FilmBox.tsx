import React from "react";
import "./FilmBox.scss";
import { FilmCategoryKeys } from "@/app/constants";
import FilmPoster from "../FilmPoster";
import Link from "next/link";
import { Film } from "@/app/types/film.type";

interface FilmBoxProps {
  film: Pick<Film, "id" | "title" | "poster_path">;
  category?: FilmCategoryKeys;
  showRemove?: boolean;
  onRemove?: (id: number) => void;
}

const FilmBox: React.FC<FilmBoxProps> = ({
  film,
  category = "",
  showRemove,
  onRemove,
}) => (
  <div className="film-box-wrapper">
    <Link href={`/film/${film.id}?category=${category}`} className="film-link">
      <div className="film-box">
        <FilmPoster
          className="poster"
          imageUrl={film.poster_path ?? ""}
          title={film.title}
        />
        <div className="film-title">{film.title}</div>
      </div>
    </Link>
    {showRemove && onRemove && (
      <button className="remove-wish" onClick={() => onRemove(film.id)}>
        Remove
      </button>
    )}
  </div>
);

export default FilmBox;
