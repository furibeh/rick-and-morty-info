import { getCharacterById, getCharacterDescription } from "@/api/characters";
import Background from "@/components/Background";
import FuzzyText from "@/components/FuzzyText";
import LightRays from "@/components/LightRays";
import Spinner from "@/components/Spinner";
import TiltedCard from "@/components/TiltedCard";
import { useQuery } from "@tanstack/react-query";
import { Link, useParams } from "react-router-dom";

export default function CharacterPage() {
  const { id } = useParams<{id: string}>()
  const characterId = Number(id)

  const isValidId = !!id && !isNaN(characterId)

  const characterQuery = useQuery({
    queryKey: ["characterById", characterId],
    queryFn: () => getCharacterById(characterId),
    enabled: isValidId,
    staleTime: 1000 * 60 * 5,
  })

  const descriptionQuery = useQuery({
    queryKey: ["description", characterQuery.data?.name],
    queryFn: () => getCharacterDescription(characterQuery.data!.name),
    enabled: !!characterQuery.data?.name,
    staleTime: Infinity,
  });  
  

  if (!isValidId) {
    return (
      <p className="text-8xl text-white">ERROR: NO ES VALIDO EL ID 😡</p>
    )
  }

  if (characterQuery.isLoading) {
    return (
      <div className="w-full min-h-screen relative flex justify-center items-center">
        <Background>
          <LightRays />
        </Background>
  
        <div className="relative z-10 flex flex-col items-center gap-4 text-white">
          <Spinner />
          <p className="text-xl text-neutral-300">
            Travelling between dimensions...
          </p>
        </div>
      </div>
    )
  }
  

	if (characterQuery.error) {
    return (
      <div className="w-full min-h-screen relative flex justify-center items-center">
        <Background>
          <LightRays />
        </Background>
  
        <div className="relative z-10 flex flex-col items-center gap-4 text-white text-center">
          <p className="text-2xl text-red-400 font-semibold">
            Something went bad on this dimensión 🧨
          </p>
          <p className="text-neutral-400 max-w-md">
            We couldn't fetch the character data.
          </p>
  
          <Link to="/">
            <button className="mt-4 px-6 py-3 bg-green-500 text-black font-semibold rounded-xl hover:bg-green-400 transition">
              BACK TO MAIN PAGE
            </button>
          </Link>
        </div>
      </div>
    )
  }
  

  return (
    <div className='w-full min-h-screen relative flex justify-center items-center'>
			<Background>
				<LightRays />
			</Background>

			<div className='flex flex-col justify-center items-center text-white gap-4'>
				<FuzzyText
					enableHover={false}
					baseIntensity={0.2}
				>
					{characterQuery.data.name}
				</FuzzyText>
        <div className="my-8">
          <TiltedCard 
            imageSrc={characterQuery.data.image}
            altText={characterQuery.data.name}
            captionText={characterQuery.data.name}
            displayOverlayContent={true}
            overlayContent={
              <p className="m-4 p-3 bg-black/30  rounded-xl">STATUS: {characterQuery.data.status} - SPECIES: {characterQuery.data.species}</p>
            }
          />
        </div>

        {descriptionQuery.isLoading && <Spinner />}

        {descriptionQuery.data && (
          <div className="mt my-3 backdrop-blur-sm bg-white/5 rounded-xl py-5">
            <p className="max-w-6xl mx-auto px-6 md:px-4 text-lg text-white leading-relaxed text-center">
              {descriptionQuery.data.response}
            </p>
          </div>


        )}

        <Link to={{pathname: "/"}}><button className="px-6 py-3 bg-green-500 text-black font-semibold rounded-xl hover:bg-green-400 hover:scale-105 active:scale-95 transition-all duration-200 shadow-lg shadow-green-500/40 cursor-pointer">BACK TO MAIN PAGE</button></Link>
			</div>

		</div>
  )
}