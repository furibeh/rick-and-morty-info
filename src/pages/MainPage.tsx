import FuzzyText from "@/components/FuzzyText"
import CharacterGrid from "@/components/CharacterGrid"
import Background from "@/components/Background"
import Galaxy from "@/components/Galaxy"

export default function MainPage() {

	return (
		<div className='w-full min-h-screen relative flex justify-center items-center'>
			<Background>
				<Galaxy mouseRepulsion={false} glowIntensity={0.3} density={3}/>
			</Background>

			<div className='flex flex-col justify-center items-center text-white gap-4'>
				<FuzzyText
					enableHover={false}
					baseIntensity={0.2}
				>
					Rick and Morty Info 💀
				</FuzzyText>
				<p className='text-xl font-bold text-shadow-md text-shadow-lime-300'>Welcome to this page, where you can find anything about the characters of Rick and Morty's series</p>
				<p className="text-sm font-semibold text-white/60">¡Select the character you want to meet and delve into their universe!</p>

				<CharacterGrid/>
			</div>

		</div>
  )
}