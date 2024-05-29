import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Tooltip,
    Button,
  } from "@material-tailwind/react";
   
  export default function ContactSellerCard(props) {

    return (
      <div className="md:w-48 justify-center p-4 md:p-0 shadow-md rounded-xl flex flex-wrap items-center">
        <div className="md:w-full md:my-4 flex justify-center">
          <img 
          src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=2360&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
          alt="Ảnh người bán" className="object-cover object-center rounded-full w-36 h-36 shadow-lg"/>
        </div>
        <div className="px-4 pl-6 md:p-0 md:w-full">
            <div className="w-full text-center justify-between py-0">
            <Typography color="blue-gray" className="font-medium" textGradient>
                Người bán
            </Typography>
            <Typography variant="h5" color="blue-gray" className="mb-1">
                {props.seller}
            </Typography>
            </div>
            <div className="w-full flex justify-center pt-3 pb-5">
                <a href={`tel:{props.phone_number}`}>
                    <Button className="bg-[#b21c0e]">Gọi {(props.phone_number)}</Button>
                </a>
            </div>
        </div>
      </div>
    );
  }