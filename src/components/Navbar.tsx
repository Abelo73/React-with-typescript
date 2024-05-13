

interface Props{
    cartItemsCounter:number
}
const Navbar = ({cartItemsCounter}:Props) => {
  return (
    <div>Navbar: {cartItemsCounter}</div>
  )
}

export default Navbar