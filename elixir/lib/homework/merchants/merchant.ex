defmodule Homework.Merchants.Merchant do
  use Ecto.Schema
  import Ecto.Changeset
  alias Homework.Transactions.Transaction
  
  @fields [:name, :description]
  @primary_key {:id, :binary_id, autogenerate: true}
  schema "merchants" do
    field(:description, :string)
    field(:name, :string)
    has_many(:transactions, Transaction)

    timestamps()
  end

  @doc false
  def changeset(merchant, attrs) do
    merchant
    |> cast(attrs, @fields)
    |> validate_required(@fields)
  end
end
