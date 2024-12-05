export default function Footer() {
    return(
        <div className="mt-[340px]">
            <div className="flex flex-row justify-between mt-8 mr-20 mb-8 ml-20">
                <p className="text-sm px-[10px]">Made with ❤️ at nFactorial in 2022.</p>
                <p className="text-sm px-[10px] opacity-50">
                    Credits: icons from{" "}
                    <a 
                        href="https://icons8.com/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="underline hover:opacity-75"
                    >
                        Icons8
                    </a>
                </p>
            </div>
        </div>
    );
}