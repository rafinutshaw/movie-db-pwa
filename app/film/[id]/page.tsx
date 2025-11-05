"use client";

import "./FilmDetail.scss";
import { FilmSchema } from "../../schemas/film.schema";
import { useFilmDetail } from "@/app/hooks/useFilmDetail";
import FilmInfo from "@/app/components/FilmInfo/FilmInfo";
import CastList from "@/app/components/CastList/CastList";

export default function FilmDetail() {
  const { film, loading, error, category } = useFilmDetail(FilmSchema);
  const pageTitle = loading
    ? "Loading... - TMDB"
    : film?.title
    ? `${film.title} - TMDB`
    : "TMDB";
  const pageDesc = film?.overview || "Film details and cast.";

  return (
    <div className={`film-detail ${category ?? ""}`}>
      {error && <div className="error-message">{error}</div>}
      <FilmInfo film={film} loading={loading} category={category} />
      <CastList />
    </div>
  );
}
