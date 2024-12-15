import React,{useState} from 'react'

function ChatScreen() {

    const results = [
        { id: 1, result: "Passionate Technologist & Innovator | AI & ML Enthusiast | Web & Mobile Development Expert Technology Journey: I embarked on my journey in technology at the age of 12, driven by a prof ound curiosity for coding and problem-solving. Self-Learning Advocate: As a self-t aught developer, I immersed myself in various programming languages and technologies, cultivating strong analytical skills and a resilient mindset. Development Expertise: By the age of 14, I had gained proficiency in both mobile and web development, successfully executing several IoT projects that solidified my practical experience.Founder of Mitcode: At 15, I founded Mitcode, an online platform dedicated to teaching web and mobile development. My mission was to empower students by providing comprehensive courses ranging from basic to advanced levels. Freelance Professional: Following a successful year with Mitcode, I transitioned to freelancing, delivering diverse projects across India and the UAE, which enriched my portfolio and broadened my skill set.AI and Machine Learning Enthusiast: My passion for artificial intelligence and machine learning began at 16, leading to over 2.5 years of experience in developing innovative AI models across various industries, demonstrating my commitment to leveraging technology for impactful solutions.Personal Growth Through Technology: Technology has not only shaped my career but has also played a vital role in helping me navigate personal challenges, providing me with a sense of purpose and the opportunity to contribute positively to society." },
        { id: 11, result: "Mirza aman is sdjf sdkf skdf khd f" },
    ]

    const [userText,setUserText] = useState('');

    return (
        <div className="chatScreenContainer">
            <div className="mainContainer">
                <div className="chatContainer">
                    <div className="resultContainer">
                        {
                            results.map((item) => {
                                return (
                                    <>
                                        <p id='result' className='rubik-m' key={item.id} >
                                            <p id='key' className='sixtyfour-convergence'>Answer & (Result No : {item.id}) </p>
                                            {item.result}
                                        </p>
                                        <hr id='hrr' />
                                    </>
                                );
                            })
                        }
                    </div>
                </div>
                <div className="inputContainer">
                    <input type="text" className="promptBox" placeholder='Ask Your Question?' onChange={(text)=>setUserText(text.target.value)} />
                    <button disabled={userText===''?true:false} className='promptButton'>
                        <span className="material-symbols-outlined">
                            send
                        </span>
                    </button>
                </div>
            </div>
        </div>
    )
}
export default ChatScreen