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
alias Homework.Users
alias Homework.Merchants
alias Homework.Transactions

{:ok, user_one} = Users.create_user(%{
    dob: "10/26/1992",
    first_name: "Tony",
    last_name: "Stark"
})

{:ok, merchant_one} = Merchants.create_merchant(%{
    name: "Playstation",
    description: "Sony Interactive Entertainment LLC"
})

{:ok, transaction_one} = Transactions.create_transaction(%{
    amount: 49900,
    credit: false,
    debit: true,
    description: "PS5 without tax lol",
    merchant_id: merchant_one.id,
    user_id: user_one.id
})