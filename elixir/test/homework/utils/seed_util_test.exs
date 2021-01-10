defmodule Homework.Utils.SeedUtilTest do
  use Homework.DataCase
  alias Homework.Utils.SeedUtil

  describe "random_date/2" do
      test "return NaiveDateTime within 30 days of now" do
          thirty_days_ago_in_seconds = 30 * 24 * 60 * 60 * -1
          result = SeedUtil.random_date(NaiveDateTime.utc_now())
          thirty_days_ago = NaiveDateTime.utc_now() |> NaiveDateTime.add(thirty_days_ago_in_seconds)
          assert NaiveDateTime.compare(result, thirty_days_ago) == :gt  
      end
  end
end