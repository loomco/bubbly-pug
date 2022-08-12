import Image from 'next/future/image';
import React from 'react'

const PetProfileComp = () => {
    return (
        <main className="flex-[5] pt-24 px-2">
            <div className="flex flex-col max-w-lg mx-auto w-full my-7 gap-y-7">
                <Image src="/images/hero-b.png" alt="Bubbly Pug Animal Profile Picture, Tidus" height="300" width="300" className="object-cover rounded-xl mx-auto" />

                <p className="text-left">My name is
                    <span className="font-bold"> Tidus</span>! I am
                    <span className="font-bold"> 9 years old </span> and of the
                    <span className="font-bold"> Golden Retriever</span> breed. I currently weigh
                    <span className="font-bold"> 12 pounds. </span>
                    I am a
                    <span className="font-bold"> Male</span> and thankfully have
                    <span className="font-bold"> not been neutered</span>....yet!</p>

                <div>
                    <p>My humans have to give me the following medications occassionaly:</p>
                    <ul className="list-disc ml-8">
                        <li>Medication One</li>
                        <li>Medication Two</li>
                        <li>Medication Three</li>
                    </ul>
                </div>


                <div>
                    <p>Here are a list of my allergies:</p>
                    <ul className="list-disc ml-8">
                        <li>Allergy One</li>
                        <li>Allergy Two</li>
                        <li>Allergy Three</li>
                    </ul>
                </div>

                <div>
                    <h6 className="font-bold">Additional Information:</h6>
                    <p>Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                </div>
            </div>

        </main>
    )
}

export default PetProfileComp