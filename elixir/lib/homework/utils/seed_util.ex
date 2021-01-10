defmodule Homework.Utils.SeedUtil do
  @moduledoc """
  Helper utilities for seeding data.
  """
  @doc """
  returns a random NaiveDateTime in the past bewteeen seed_date and range.
  """
  @spec random_date(NaiveDateTime.t(), integer) :: NaiveDateTime.t()
  def random_date(seed_date, days_since_limit \\ 30) when days_since_limit > 0 do
    seconds_since_seed_date = :rand.uniform(days_since_limit) * 24 * 60 * 60 * -1 

    seed_date
    |> NaiveDateTime.add(seconds_since_seed_date, :second)
    |> NaiveDateTime.truncate(:second)
  end
end
