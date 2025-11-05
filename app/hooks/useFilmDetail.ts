import { useState, useEffect } from "react";
import { fetchFilmDetailUsecase } from "../usecases/filmUsecase";
import type { ZodType } from "zod";
import { useParams, useSearchParams } from "next/navigation";

export function useFilmDetail<T>(schema: ZodType<T>) {
  const [film, setFilm] = useState<T | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { id } = useParams<{ id: string }>();
  const searchParams = useSearchParams();

  const category = searchParams.get("category");

  useEffect(() => {
    if (id) {
      setLoading(true);
      setError(null);
      fetchFilmDetailUsecase<T>(id, schema).then((data) => {
        setFilm(data.film);
        setError(data.error);
        setLoading(false);
      });
    }
  }, [id]);

  return { film, loading, error, category };
}
