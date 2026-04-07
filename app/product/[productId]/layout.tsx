function getRandomnumber(count: number){
  return Math.floor (Math.random() * count);
}




export default function ProductDetailsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
      <h2>Featured Product</h2>
    </>
  );
}
