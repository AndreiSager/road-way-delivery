import Image from "next/image";

export default function About() {
    return(
        <div className="sectionPadding flex flex-col">
            <div className="flex flex-row">
                <div className="p-6 flex flex-col justify-center">
                    <h1 className="sectionHeader">Know About Us</h1>
                    <p className="text-justify font-medium text-gray-500">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis iure laudantium repellat qui voluptas? Itaque quam error qui earum nobis? Totam quisquam nostrum cum, iure officia numquam? Illo a ipsum quae et non neque natus amet odio, mollitia eaque corrupti, ut, eligendi beatae quod id ullam? Totam numquam quidem vel?</p>
                </div>
                <Image
                    src="/entrepreneur_compressed.jpg"
                    height={200}
                    width={700}
                    alt="Hello"
                    className="object-cover"
                    >
                </Image>
            </div>
            <div className="flex flex-row">
                <div className="p-6 order-2 flex flex-col justify-center">
                    <h1 className="sectionHeader">Our Mission</h1>
                    <p className="text-justify font-medium text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque sunt sequi quasi harum accusamus nihil? Velit, dolore sequi non, atque qui asperiores adipisci, neque repudiandae in quia fugiat assumenda placeat. Praesentium harum ut eos. Quasi, ratione nulla. Fugit, facere? Eligendi harum eos illum assumenda enim porro officia ipsa itaque earum.</p>
                </div>
                <Image
                    src="/warehouse_compressed.jpg"
                    height={200}
                    width={700}
                    alt="Hello"
                    className="object-cover order-1"
                    >
                </Image>
            </div>
            <div className="flex flex-row">
                <div className="p-6 flex flex-col justify-center">
                    <h1 className="sectionHeader">Our Vision</h1>
                    <p className="text-justify font-medium text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque sunt sequi quasi harum accusamus nihil? Velit, dolore sequi non, atque qui asperiores adipisci, neque repudiandae in quia fugiat assumenda placeat. Praesentium harum ut eos. Quasi, ratione nulla. Fugit, facere? Eligendi harum eos illum assumenda enim porro officia ipsa itaque earum.</p>
                </div>
                <Image
                    src="/trucks_compressed.jpg"
                    height={500}
                    width={700}
                    alt="Hello"
                    className="object-cover"
                    >
                </Image>
            </div>
        </div>
    )
}