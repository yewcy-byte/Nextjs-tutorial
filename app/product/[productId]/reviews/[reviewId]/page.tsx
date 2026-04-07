
import { notFound, redirect } from "next/navigation";


function getRandomnumber(count: number){
  return Math.floor (Math.random() * count);
}





export default async function productReview({params}:{params: Promise<{productId: string; reviewId:string}>;
}){
  const random = getRandomnumber(2);

  if (random === 1){
throw new Error ("Error loading review")
  }
    const {productId, reviewId} = await params;

    if (parseInt(reviewId)>1000){
      //notFound();

      redirect("/product");
    }
    return(

        <h1>
        Review {reviewId} for product {productId}
        
        </h1>
    );


}