# Script for populating the database. You can run it as:
#
#     mix run priv/repo/seeds.exs
#
# Inside the script, you can read and write to any of your
# repositories directly:
#
#     Homework.Repo.insert!(%Homework.SomeSchema{})
#
# We recommend using the bang functions (`insert!`, `update!`
# and so on) as they will fail if something goes wrong.

alias Homework.Merchants.Merchant
alias Homework.Repo
alias Homework.Transactions.Transaction
alias Homework.Users.User
alias Homework.Utils.SeedUtil

now = NaiveDateTime.utc_now() |> NaiveDateTime.truncate(:second)

users_list = [
  %{
    first_name: "Thor",
    last_name: "Odinson",
    dob: "04/27/1345",
    inserted_at: now,
    updated_at: now,
  },
  %{
    first_name: "Bruce",
    last_name: "Banner",
    dob: "06/03/1976",
    inserted_at: now,
    updated_at: now
  },
  %{
    first_name: "Natasha",
    last_name: "Romanove",
    dob: "05/25/1985",
    inserted_at: now,
    updated_at: now
  },
  %{
    first_name: "Steve",
    last_name: "Rogers",
    dob: "07/04/1918",
    inserted_at: now,
    updated_at: now
  },
  %{
    first_name: "Thanos",
    last_name: "Mad-Titan",
    dob: "2/06/1186",
    inserted_at: now,
    updated_at: now
  }
]

{5, users} = Repo.insert_all(User, users_list, returning: true, on_conflict: :nothing)

merchants_list = [
  %{
    name: "Walmart",
    description: "Grocery stores/supermarkets/bakeries",
    inserted_at: now,
    updated_at: now
  },
  %{name: "Amazon", description: "Online Marketplace", inserted_at: now, updated_at: now},
  %{name: "Kroger", description: "Grocery Retailer", inserted_at: now, updated_at: now},
  %{name: "Costco", description: "Wholesale Retailer", inserted_at: now, updated_at: now},
  %{
    name: "The Home Depot",
    description: "Home Improvement Retailer",
    inserted_at: now,
    updated_at: now
  }
]

{5, merchants} = Repo.insert_all(Merchant, merchants_list, returning: true, on_conflict: :nothing)

transaction_descriptions = ["Cheese", "4k TV", "Beef", "Gift Card", "Ladder", "PS5"]

transactions_list =
  Enum.map(1..15, fn _ ->
    %{
      amount: Enum.random(450..50000),
      credit: false,
      debit: true,
      description: Enum.random(transaction_descriptions),
      user_id: Enum.random(users).id,
      merchant_id: Enum.random(merchants).id,
      inserted_at: SeedUtil.random_date(NaiveDateTime.utc_now()),
      updated_at: now
    }
  end)

{15, _transactions} =
  Repo.insert_all(Transaction, transactions_list, returning: true, on_conflict: :nothing)

_admin_user =
  Repo.insert!(
    User.changeset(%User{}, %{
      dob: "10/26/1992",
      first_name: "Admin Tony",
      last_name: "Stark"
    })
  )
