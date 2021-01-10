defmodule Homework.Users.User do
  use Ecto.Schema
  import Ecto.Changeset
  alias Homework.Transactions.Transaction

  @fields [:first_name, :last_name, :dob]
  @primary_key {:id, :binary_id, autogenerate: true}
  schema "users" do
    field(:dob, :string)
    field(:first_name, :string)
    field(:last_name, :string)
    has_many(:transactions, Transaction)

    timestamps()
  end

  @doc false
  def changeset(user, attrs) do
    user
    |> cast(attrs, @fields)
    |> validate_required(@fields)
  end
end
