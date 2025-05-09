import React from "react";

import { useNavigate, useLocation } from "react-router-dom";
export default function Assignment(){
    const navigate=useNavigate();
        const {pathname}=useLocation();
    return(
        <div className="assLayout">
            <div style={{height:"100vh", position:"relative"}}>
                <div className="subMenu" style={{marginLeft:"10px",borderRadius:"10px",position:"fixed", boxShadow:"0px 0px 5px 0px", width:"23%", height:"fit-content", padding:"50px 0px", minHeight:"400px"}}>
                <div style={{width:"100%",display:"flex", justifyContent:"center", flexDirection:"column", gap:"20px"}}>
                    <h4 style={{listStyle:"none", width:"100%", textAlign:"center"}}>MENU</h4>
                    <div style={{listStyle:"none", width:"100%", textAlign:"center", cursor:"pointer"}} onClick={(e)=>{e.preventDefault(); if (pathname==="/")window.location.replace("#section-1"); else {navigate('/')} }}> 🎨 VISUAL ARTS – Annotated Toolkit</div>
                    <div style={{listStyle:"none", width:"100%", textAlign:"center", cursor:"pointer"}} onClick={(e)=>{e.preventDefault(); if (pathname==="/")window.location.replace("#section-2"); else {navigate('/')} }}> 💃 DANCE – Annotated Toolkit </div>
                    <div style={{listStyle:"none", width:"100%", textAlign:"center", cursor:"pointer"}} onClick={(e)=>{e.preventDefault(); if (pathname==="/")window.location.replace("#section-3"); else {navigate('/')} }}> 🎭 DRAMA – Annotated Toolkit </div>
                    <div style={{listStyle:"none", width:"100%", textAlign:"center", cursor:"pointer"}} onClick={(e)=>{e.preventDefault(); if (pathname==="/")window.location.replace("#section-4"); else {navigate('/')} }}> 🎵 MUSIC – Annotated Toolkit </div>
                    <div style={{listStyle:"none", width:"100%", textAlign:"center", cursor:"pointer"}} onClick={(e)=>{e.preventDefault(); if (pathname==="/")window.location.replace("#section-5"); else {navigate('/')} }}> 🎬 MEDIA ARTS – Annotated Toolkit</div>
                </div>
                </div>
            </div>
            <div style={{display: "flex", justifyContent:"center", flexDirection:"column"}}>
            <h3 id="section-1"><b>🎨 VISUAL ARTS – Annotated Toolkit (4 websites)</b></h3>
            <hr/>
            <p>1. The Artful Parent</p>
            <p>Website: <a href="https://artfulparent.com" target="blank">https://artfulparent.com</a></p>
            <p>• Purpose:</p> 
            <p>The Artful Parent presents imaginative art activities and concepts for kids and focuses primarily on the creative process above the final work. The Artful Parent website enables exploration and self-expression in kids through unrestricted visual art activities which makes it an excellent resource for educators teaching early childhood and primary students.</p>
            <p>• Critique: </p>
            <p>Strengths: The website offers easy navigation combined with practical activities that use accessible materials while supporting child-directed learning. The site facilitates arts integration which connects artistic creation with literacy development as well as seasonal themes and health promotion.</p>
            <p>Weaknesses: Educators must modify activities since the content does not follow curriculum guidelines and lacks organized lesson plans.</p>
            <p>• Practical Classroom Activity:</p>
            <p className="tab">- The post titled "Watercolour Resist with Crayons" shows children using white crayons to create designs on paper which become visible after applying watercolour paint.</p>
            <p className="tab">- Students draw sea creatures with crayons during a literacy unit "under the sea" and paint blue backgrounds to blend visual arts with storytelling activities.</p>
            <p>• Learning Outcome: Students use contrasting layers in art to create visual stories.</p>
            <p>• Assessment: Evaluate how children articulate the narrative represented in their art pieces.</p>
            <p>• Differentiation: Children who struggle with fine motor skills should use thick crayons on large-format paper.</p>
            <hr/>
            <p>2. Tate Kids – Tate Gallery </p>
            <p>Website: <a href="https://www.tate.org.uk/kids " target="blank">https://www.tate.org.uk/kids </a></p>
            <p>Through games, quizzes, DIY art activities and short artist biographies Tate Kids teaches children about art and famous artists. Through Tate Kids children learn to value art while they use digital tools and develop creative thought processes.</p>
            <p>• Critique: </p>
            <p>Strengths: Provides an entertaining interactive exploration of famous artists and styles that helps stimulate discussions and creative thinking. It fosters visual literacy and cultural appreciation. </p>
            <p>Weaknesses: The content is designed with reading fluency requirements making it ideal for children aged 6 and older. Teachers might have to modify or provide assistance when younger children use this material.</p>
            <p>• Practical Classroom Activity: </p>
            <p className="tab">- The “Make a Mood Palette” activity serves as a tool to analyze emotions through Visual Arts.</p>
            <p className="tab">- Students first read “The Color Monster” together then create a mood wall for the class by mixing paint colours to represent different emotions before integrating emotional understanding with artistic expression.</p>
            <p>• Learning Outcome: Students develop an understanding of how colours represent different emotional states through visual associations.</p>
            <p>• Assessment: Children need to explain their mood palette through specific emotion words and corresponding colours.</p>
            <p>• Differentiation: Provide children who struggle with colour mixing with pre-mixed options or give them visual emotion cards for assistance.</p>
            <hr/>
            <p>3. ABC Education – Visual Arts </p>
            <p>Website: <a href="https://education.abc.net.au/home#!/resources/arts/visual-arts" target="blank">https://education.abc.net.au/home#!/resources/arts/visual-arts</a></p>
            <p>• Purpose: </p>
            <p>The platform presents curriculum-aligned materials including videos, interactive activities, and teacher resources for Visual Arts tailored to different year levels. The platform maintains an immediate connection with the Australian Curriculum while enhancing visual literacy skills.</p>
            <p>• Critique: </p>
            <p>Strengths: Professionally produced, curriculum-linked, and Australian. The platform features classroom-ready videos and real-world artist examples which perfectly match classroom needs.</p>
            <p>Weaknesses: The ELC materials lack sufficient practical activities requiring teachers of 4–5-year-olds to modify resources for effective use.</p>
            <p>• Practical Classroom Activity: </p>
            <p className="tab">- The video “Art in Nature” serves as inspiration for students to engage in artistic projects during an outdoor session.</p>
            <p className="tab">- Children collect leaves and sticks from outdoors to make natural texture collages with flowers. Through discussions students learn about textures and symmetry while connecting artistic concepts to scientific principles and eco-friendly practices.</p>
            <p>• Learning Outcome: Students learn to use natural materials as art materials while enhancing their pattern recognition abilities.</p>
            <p>• Assessment: Record students’ creations alongside their skills in identifying textures and describing their artistic decisions.</p>
            <p>• Differentiation: Indoor learners or children with mobility limitations require photos of natural materials for educational purposes.</p>
            <hr/>
            <p>4. ArtsEdge – Visual Arts Resources </p>
            <p>Website: <a href="https://www.kennedy-center.org/education/resources-for-educators/classroom-resources/artsedge/" target="blank">https://www.kennedy-center.org/education/resources-for-educators/classroom-resources/artsedge/</a></p>
            <p>• Purpose: </p>
            <p>The Kennedy Center provides free educational resources through ArtsEdge which includes lesson plans and interactive activities designed to merge arts into the curriculum while emphasizing Visual Arts elements.</p>
            <p>• Critique: </p>
            <p>Strengths: Interdisciplinary lesson plans provide detailed frameworks that effectively connect visual arts with subjects like history, literature and social studies.</p>
            <p>Weaknesses: Several materials focus on American themes and require modification to match Australian educational standards and cultural context.</p>
            <p>• Practical Classroom Activity: </p>
            <p className="tab">- Create a version of the “Lines and Shapes Around Us” lesson suitable for young children.</p>
            <p className="tab">- Students search for different shapes within the classroom then sketch them and transform their drawings into creative characters through collage work which combines math skills with language and visual arts education.</p>
            <p>- Learning Outcome: Pupils explore geometric patterns and express their creativity by transforming them into art pieces.</p>
            <p>- Assessment: Assess how students selected different shapes and described their collaged creations verbally.</p>
            <p>- Differentiation: Offer shape templates or tactile outlines to learners who require additional visual or sensory assistance.</p>
            <h3 id="section-2"><b>💃 DANCE – Annotated Toolkit (4 websites)</b></h3>
            <hr/>
            <p>1. Dance Teaching Ideas </p>
            <p>Website: <a href="https://www.danceteachingideas.com  " target="blank">https://www.danceteachingideas.com</a></p>
            <p>• Purpose: </p>
            <p>The Australian website provides dance lessons designed specifically for early childhood and primary school classrooms. The site helps teachers merge dance with literacy skills and math abilities while promoting student wellbeing and proves beneficial for dance instructors who are just beginning their teaching careers.</p>
            <p>• Critique: </p>
            <p>• Strengths: An expert dance educator developed this resource which includes lesson plans that align with the curriculum alongside clear instructions for movements and tips for classroom management.</p>
            <p>• Weaknesses: The website contains extensive text-based information while offering only minimal video demonstrations which some educators might find insufficient for visual learning.</p>
            <p>• Practical Classroom Activity: </p>
            <p className="tab">- Use the lesson “Exploring Patterns Through Dance.” </p>
            <p className="tab">- Integrated Activity Idea: Students who learn simple mathematical patterns (AB, ABC) collaborate in small groups to develop a dance phrase with body percussion and movements such as stomp–clap–turn for the ABC pattern. The music accompanies each child's pattern performance before peers attempt to duplicate the movement sequence.</p>
            <p>• Learning Outcome: Students develop their rhythm and coordination by identifying and replicating movement patterns which they create.</p>
            <p>• Assessment: Evaluate student performance by checking their capability to reproduce and describe their movement pattern. Implement a visual checklist to evaluate pattern recognition and performance skills.</p>
            <p>• Differentiation: Students who require additional help can benefit from cards that display movement symbols like 🦶 for stomp and 👏 for clap.</p>
            <hr/>
            <p>2. Ausdance – Dance Resources </p>
            <p>Website: <a href="https://ausdance.org.au/resources" target="blank">https://ausdance.org.au/resources</a></p>
            <p>• Purpose: </p>
            <p>Ausdance provides educators with dance resources that fit the Australian curriculum while supporting advocacy work and inclusive teaching practices alongside professional development opportunities.</p>
            <p>• Critique: </p>
            <p>• Strengths: Ausdance's dance resources connect well to the Australian curriculum while supporting inclusive practices and linking creative movement to learning areas.</p>
            <p>• Weaknesses: The materials in question target older students but necessitate modifications from early childhood educators to make them suitable for younger learners.</p>
            <p>• Practical Classroom Activity (enhanced): </p>
            <p className="tab">- Apply “Creative Dance in the Early Years” to construct a movement lesson inspired by Where the Wild Things Are.</p>
            <p className="tab">- Integrated Activity Idea: Children physically narrate the story through movement after reading it. Students bring Max and the Wild Things to life through different levels from low to high as well as big and small shapes combined with varying tempos that are slow and fast. Students work in small teams to develop a brief movement routine that illustrates Max’s adventure and then perform it for their classmates.</p>
            <p>• Learning Outcome: Movement activities enable children to discover narrative meaning while improving their understanding and expressive physical skills.</p>
            <p>• Assessment: Assess students' spatial awareness and expression through story sequencing using a rubric.</p>
            <p>• Differentiation: Provide visual cues for key story events including boat scenes and forest settings along with movement examples tailored to various student abilities.</p>
            <hr/>
            <p>3. GoNoodle </p>
            <p>Website: <a href="https://www.gonoodle.com" target="blank">https://www.gonoodle.com </a></p>
            <p>• Purpose: </p>
            <p>Educators can access GoNoodle for brief videos that combine movement and dance while teaching students about physical activity and coordination along with mindfulness practices.</p>
            <p>• Critique: </p>
            <p>• Strengths: This content delivers high engagement while being entertaining and effectively encourages brief physical activity during classroom transitions and mental refresh periods.</p>
            <p>• Weaknesses: The program lacks structured progression and curriculum alignment which makes it unsuitable for formal dance outcomes unless teachers provide additional guidance.</p>
            <p>• Practical Classroom Activity (enhanced): </p>
            <p className="tab">- A “Freeze It” video helps students develop their dance awareness and control of their body movements.</p>
            <p className="tab">- Integrated Activity Idea: Students dance freely to upbeat music. Students freeze their movement in either an emotional expression like happiness or anger or a physical shape like wide or tall when the music ends. The teacher asks students to either describe their pose or demonstrate it differently after each freeze round. Students use movement in an activity that connects social-emotional learning with their ability to express themselves orally.</p>
            <p>• Learning Outcome: Cultivate physical awareness along with emotional articulation and movement terminology.</p>
            <p>• Assessment: Utilize peer feedback and reflective questions such as “What shape did you make?” and “What feeling did your freeze show?”</p>
            <p>• Differentiation: Students who need help with visualization should be given emotion/shape cards as a support tool.</p>
            <hr/>
            <p>4. BBC School Radio – Dance KS1 </p>
            <p>Website: <a href=" https://www.bbc.co.uk/teach/school-radio/dance-ks1--ks2-index/zfdmpg8" target="blank"> https://www.bbc.co.uk/teach/school-radio/dance-ks1--ks2-index/zfdmpg8</a></p>
            <p>• Purpose:</p>
            <p>Children aged 4–7 can join free audio-guided dance classes which develop their movement skills and spatial awareness through storytelling and music.</p>
            <p>• Critique: </p>
            <p>• Strengths: The program combines music and storytelling effectively to support literacy and dance connections while developing listening skills through audio delivery.</p>
            <p>• Weaknesses: Younger learners may need extra modelling or props because of the UK curriculum focus and audio-only format.</p>
            <p>• Practical Classroom Activity (enhanced): </p>
            <p className="tab">- Utilize “The Magic Carpet” episode as a tool for movement exploration during a guided fantasy journey.</p>
            <p className="tab">- Integrated Activity Idea: Students choose between lying on yoga mats or sitting in a circle while they listen to the audio. Throughout the story they physically enact flying over mountains then transition to floating amidst clouds and finally stretch upwards to reach the stars. Following the activity students illustrate their favorite journey moment and explain their movements.</p>
            <p>• Learning Outcome: Through narrative prompts children show expressive movements and start sequencing their actions according to the story's framework.</p>
            <p>• Assessment: Creativity and comprehension assessment should be based on observation notes and student reflections/drawings.</p>
            <p>• Differentiation: Before children participate in the activity show them how to move through the story elements first and use visual symbols to depict key story features.</p>
            <h3 id="section-3"><b>🎭 DRAMA – Annotated Toolkit (4 websites)</b></h3>
            <hr/>
            <p>1. Drama Resource</p>
            <p>Website: <a href=" https://dramaresource.com" target="blank"> https://dramaresource.com</a></p>
            <p>• Purpose:</p>
            <p>Drama Resource is a comprehensive website offering over 100 practical strategies, games, and lesson ideas to support drama teaching across age groups. It is widely used for planning engaging drama lessons that develop communication, imagination, and collaboration.</p>
            <p>• Critique:</p>
            <p>Strengths: Offers clear instructions, adaptable strategies, and links to broader literacy and wellbeing themes. The site promotes child-centred exploration and supports inclusive practices.</p>
            <p>Weaknesses: Most lessons are written with primary or secondary students in mind. Early years educators may need to simplify language or scaffold instructions.</p>
            <p>• Practical Classroom Activity:</p>
            <p className="tab">-	Try the “Conscience Alley” activity to explore a decision-making theme.</p>
            <p className="tab">-	Integrated Activity Idea: During a unit on “making good choices,” the class listens to a picture book like "What Should Danny Do?" and pauses at a key dilemma. Two lines of children form the alley and take turns advising Danny (played by a student) on what he should do.</p>
            <p className="tab">• Children then swap roles and act out the outcome of each choice through mime or guided improvisation.</p>
            <p>• Learning Outcome:</p>
            <p>Children understand perspectives, consequences, and express opinions through simple dramatic play.</p>
            <p>• Assessment:</p>
            <p>Observe and document children’s verbal input during the alley, their ability to role-play, and whether they can explain the character’s feelings.</p>
            <p>• Differentiation:</p>
            <p>Pre-teach key vocabulary and use picture cards for children with speech or language delays. Allow non-verbal participation through gesture or simple signs.</p>
            <hr/>
            <p>2. BBC Teach – Drama KS1</p>
            <p>Website: <a href="https://www.bbc.co.uk/teach/class-clips-video/english-ks1-drama/zbrhscw" target="blank">https://www.bbc.co.uk/teach/class-clips-video/english-ks1-drama/zbrhscw</a></p>
            <p>• Purpose:</p>
            <p>BBC Teach provides drama clips that introduce foundational skills like character, setting, and story through movement and voice. Although designed for Key Stage 1 (UK Years 1–2), many ideas can be adapted for early learners.</p>
            <p>• Critique:</p>
            <p>Strengths: Free, visually engaging, and integrates literacy and drama effectively. Videos support multisensory learning and inspire imaginative play.</p>
            <p>Weaknesses: Requires reliable internet access and educator mediation for young children. Less hands-on guidance for ELC adaptation.</p>
            <p>• Practical Classroom Activity:</p>
            <p className="tab">-Use the “We're Going on a Bear Hunt” performance clip.</p>
            <p className="tab"><b>-Integrated Activity Idea:</b> After watching the clip, guide the children in creating their own bear hunt using classroom furniture and props (e.g., tunnel made from a sheet, grass made from shredded paper). Encourage each child to narrate part of the journey using expressive language and movement.</p>
            <p>• Learning Outcome:</p>
            <p>Children retell a story using body movement, voice, and sequencing language.</p>
            <p>• Assessment:</p>
            <p>Use a checklist to record children’s ability to retell key parts, use gestures appropriately, and sequence the dramatic journey.</p>
            <p>• Differentiation:</p>
            <p>Provide story maps or visual cues for sequencing. Support non-verbal children with sound effects or simple actions.</p>
            <hr/>
            <p>3. Drama Notebook</p>
            <p>Website: <a href="https://www.dramanotebook.com" target="blank">https://www.dramanotebook.com</a></p>
            <p>• Purpose:</p>
            <p>Drama Notebook provides ready-to-use drama games, scripts, and improvisation ideas aimed at young learners. It includes simple activities that foster imagination, turn-taking, and collaborative storytelling.</p>
            <p>• Critique:</p>
            <p>Strengths: Activities are clear, easy to adapt, and promote social-emotional skills. Includes themes like friendship and resilience.</p>
            <p>Weaknesses: Some content requires a subscription; free content is more limited. Teachers may need to adjust scripts for age-appropriateness.</p>
            <p>• Practical Classroom Activity:</p>
            <p className="tab">- Use the “Magic Door” game: The Magic Door game inspires children to imagine entering an alternate world after opening a door.</p>
            <p className="tab">- Integrated Activity Idea: This activity will connect directly to a science unit about different habitats. The children select a habitat behind their door which might be a jungle, desert, or ocean and demonstrate an animal from that environment. The other kids make their best guesses and describe the surroundings.</p>
            <p>• Learning Outcome:</p>
            <p>Children use movement and role-play to explore environments and animals.</p>
            <p>• Assessment:</p>
            <p>Anecdotal records of children’s imaginative choices and their ability to describe or act out an animal’s behaviour.</p>
            <p>• Differentiation:</p>
            <p>Offer animal photo cards or puppets for children who need inspiration. Provide sentence stems for children who need language scaffolding.</p>
            <hr/>
            <p>4. Teaching Drama – TES (Times Educational Supplement)</p>
            <p>Website: <a href="https://www.tes.com/teaching-resources/hub/early-years/drama" target="blank">https://www.tes.com/teaching-resources/hub/early-years/drama</a></p>
            <p>• Purpose:</p>
            <p>TES hosts a global library of teacher-made drama resources, including games, character-building activities, and thematic units linked to popular stories and early years outcomes.</p>
            <p>• Critique:</p>
            <p>Strengths: Includes downloadable, classroom-tested content by educators; often linked to popular early childhood stories. Encourages language, imagination, and role-play.</p>
            <p>Weaknesses: Quality varies by contributor. Not all materials are free; registration is required.</p>
            <p>• Practical Classroom Activity:</p>
            <p className="tab">-	Use the resource “Character Voices – Goldilocks and the Three Bears.”</p>
            <p className="tab">-	Integrated Activity Idea: After reading Goldilocks, children use props and voice variation to act out each character’s response to finding someone in their home. Emphasise volume, pitch, and facial expression. Link to literacy by discussing how each character might feel.</p>
            <p>• Learning Outcome:</p>
            <p>Children explore voice and emotion to represent characters in familiar stories.</p>
            <p>• Assessment:</p>
            <p>Video-record children’s role-play to reflect on their use of voice and emotion. Invite them to retell the story using puppets.</p>
            <p>• Differentiation:</p>
            <p>Provide voice cues or a talking button (AAC device) for non-verbal learners. Allow children to act as directors if they’re more comfortable guiding others than performing.</p>
            <h3 id="section-4"><b>🎵 MUSIC – Annotated Toolkit (4 websites)</b></h3>
            <hr/>
            <p>1. Sing Up</p>
            <p>Website: <a href=" https://www.singup.org" target="blank"> https://www.singup.org</a></p>
            <p>• Purpose:</p>
            <p>The Sing Up platform delivers music education by offering vocal learning support through its extensive collection of songs and warm-ups along with teacher guides. Singing serves as both a musical development instrument and a cross-curricular engagement strategy in early childhood and primary classrooms.</p>
            <p>• Critique:</p>
            <p>Strengths: High-quality recordings, detailed teaching notes, and thematic song collections make it easy for educators to integrate singing into their programs. The site supports vocal health, expression, and routine-building.</p>
            <p>Weaknesses: Many of the most valuable resources require a subscription; the free section is limited and less diverse.</p>
            <p>• Practical Classroom Activity:</p>
            <p className="tab">-	Begin the day with the complimentary “Hello, Hello” song as your welcome routine.</p>
            <p className="tab">-	Integrated Activity Idea: During the chorus students practice greetings in different languages such as “Bonjour” and “Ni hao” while using the song as part of a language unit. The program merges cultural awareness with phonics knowledge and musical rhythm techniques.</p>
            <p>• Learning Outcome: Students develop pitch control and rhythm through repeated vocal participation while connecting music to language and global awareness.</p>
            <p>• Assessment: Observe students' participation, correct pronunciation of multilingual greetings, and their engagement with the rhythm and melody.</p>
            <p>• Differentiation: Provide visual cue cards for greetings in different languages and offer gestures or movement prompts for non-verbal learners.</p>
            <hr/>
            <p>2. ABC Classic Kids</p>
            <p>Website: <a href="https://www.abc.net.au/classic/classic-kids" target="blank">https://www.abc.net.au/classic/classic-kids</a></p>
            <p>• Purpose:</p>
            <p>ABC Classic Kids introduces children to orchestral music through storytelling. It offers free, high-quality audio adventures that teach children about musical instruments, dynamics, and expressive elements.</p>
            <p>• Critique:</p>
            <p>Strengths: Rich in Australian content, highly engaging audio stories (like “Mimi’s Symphony”) build musical understanding, listening skills, and narrative thinking.</p>
            <p>Weaknesses: Not interactive—requires teacher mediation and planning to translate audio into hands-on experiences.</p>
            <p>• Practical Classroom Activity:</p>
            <p className="tab">-	Play “Mimi’s Symphony” during music time.</p>
            <p className="tab">-	Integrated Activity Idea: Children begin by listening and then proceed to construct musical instruments from recycled materials which they use to perform key sections of the song. This combines music, sustainability, and storytelling.</p>
            <p>Learning Outcome: Students identify musical instruments and dynamics, and explore sound through creative construction.</p>
            <p>Assessment: Assess students’ ability to match their handmade instruments to specific musical elements and explain their choices.</p>
            <p>• Differentiation: Provide templates or examples for children who need support with constructing instruments, and offer group work for collaboration.</p>
            <hr/>
            <p>3. Chrome Music Lab</p>
            <p>Website: <a href="https://musiclab.chromeexperiments.com" target="blank">https://musiclab.chromeexperiments.com</a></p>
            <p>• Purpose:</p>
            <p>Chrome Music Lab provides free interactive music tools that help users understand rhythm, melody, chords, and sound waves. Digital creativity bridges music learning with STEAM disciplines.</p>
            <p>• Critique:</p>
            <p>Strengths: No sign-in required, highly visual and exploratory. Promotes independent learning and integrates easily with maths and science.</p>
            <p>Weaknesses: Some tools (e.g., harmonics) may be too advanced for early learners without teacher guidance.</p>
            <p>Practical Classroom Activity:</p>
            <p className="tab">-	Use the “Rhythm” module to let children build simple percussion patterns.</p>
            <p className="tab">-	Integrated Activity Idea: Link with a literacy unit—students clap out syllables in their names or animal words (e.g., “kan-ga-roo”) and recreate the patterns using the rhythm tool.</p>
            <p>• Learning Outcome: Students recognise syllables and match them to rhythmic patterns, developing phonemic awareness and beat.</p>
            <p>• Assessment: Record student-created rhythms and ask them to explain their pattern choices.</p>
            <p>• Differentiation: Pre-load patterns for students needing extra support, and provide rhythm cards for kinesthetic learners to match beats before going digital.</p>
            <hr/>
            <p>4. The Singing Walrus</p>
            <p>Website: <a href="https://www.thesingingwalrus.com" target="blank">https://www.thesingingwalrus.com</a></p>
            <p>• Purpose:</p>
            <p>The Singing Walrus offers fun, educational music videos designed for young learners. Its content builds foundational skills in rhythm, counting, days of the week, and transitions through music and movement.</p>
            <p>• Critique:</p>
            <p>Strengths: Appealing visuals and catchy songs make it ideal for circle time and routines. Especially engaging for ELC students and useful for English language learners.</p>
            <p>Weaknesses: Primarily YouTube-based; may face access restrictions in some schools. Less opportunity for active music-making.</p>
            <p>• Practical Classroom Activity:</p>
            <p className="tab">-	Use the “Count to 100” song during morning meetings to energise students.</p>
            <p className="tab">-	Integrated Activity Idea: Incorporate body percussion (clapping, tapping) during the song to reinforce number sequencing and rhythm. Pair with a maths unit on counting patterns.</p>
            <p>• Learning Outcome: Children practise number sequencing through music and develop coordination by matching movement to beat.</p>
            <p>Assessment: Observe students’ ability to count in sequence and stay in rhythm during the song.</p>
            <p>• Differentiation: Allow children to sit or stand while participating; offer visual number charts or simplified versions for diverse learning needs.</p>
            <h3 id="section-5"><b>🎬 MEDIA ARTS – Annotated Toolkit (4 websites)</b></h3>
            <hr/>
            <p>1.	ABC Education – Media Arts</p>
            <p>Website: <a href="https://education.abc.net.au" target="blank">https://education.abc.net.au</a></p>
            <p>• Purpose:</p>
            <p>ABC Education provides free Australian curriculum-aligned videos along with interactive content and lesson plans which feature Media Arts topics including storytelling, animation, and digital literacy.</p>
            <p>• Critique:</p>
            <p>Strengths: High-quality, Australian content with clear curriculum alignment. Videos are short and age-appropriate, covering digital storytelling and basic media literacy.</p>
            <p>Weaknesses: Search functions can be clunky; educators need time to explore and select suitable resources.</p>
            <p>• Practical Classroom Activity:</p>
            <p className="tab">-	Use the digital storytelling series like “What is a story?” to discuss structure.</p>
            <p className="tab">-	Integrated Activity Idea: After reading a picture book, students storyboard their own simple three-part story using printed templates and act them out using puppets or iPads.</p>
            <p>• Learning Outcome: Children explore narrative structure and develop an understanding of digital storytelling.</p>
            <p>• Assessment: Observe students’ ability to structure their stories and their creativity in acting out the scenes.</p>
            <p>• Differentiation: Provide template storyboards for students who need additional support with organizing ideas.</p>
            <hr/>
            <p>2.	Media Arts by The Arts Unit (NSW Education)</p>
            <p>Website: <a href="https://artsunit.nsw.edu.au" target="blank">https://artsunit.nsw.edu.au</a></p>
            <p>• Purpose:</p>
            <p>This NSW Department of Education website supports teachers with resources, performance opportunities, and lesson ideas across the Arts—including Media Arts, film, and animation.</p>
            <p>• Critique:</p>
            <p>Strengths: Reliable, Australian resource with downloadable materials and real examples of student-created content. Strong alignment to Early Stage 1 and Stage 1 curriculum outcomes.</p>
            <p>Weaknesses: Some sections are more suitable for upper primary—teachers must simplify for ELC or Foundation years.</p>
            <p>• Practical Classroom Activity:</p>
            <p className="tab">-	Use their Storyboard Template to support visual planning.</p>
            <p className="tab">-	Integrated Activity Idea: Students take photos of classroom routines (e.g., morning circle, pack-up time) and create a digital slideshow “movie” using iPads, fostering digital sequencing and understanding of narrative structure.</p>
            <p>• Learning Outcome: Students develop visual sequencing and storytelling skills using digital media.</p>
            <p>• Assessment: Review the digital movies for narrative coherence and creativity in sequencing.</p>
            <p>• Differentiation: Offer simplified templates or work in pairs for students who need additional support.</p>
            <hr/>
            <p>3.	PBS Learning Media – Media Arts (US-Based)</p>
            <p>Website: <a href="https://www.pbslearningmedia.org" target="blank">https://www.pbslearningmedia.org</a></p>
            <p>• Purpose:</p>
            <p>PBS offers free educational videos, interactives, and teacher support focused on visual storytelling, animation, and understanding digital media messages.</p>
            <p>• Critique:</p>
            <p>Strengths: High-quality, short video lessons and ideas for introducing concepts like camera angles, emotions in media, and animation basics.</p>
            <p>Weaknesses: U.S.-centric curriculum; some language or references may need to be adapted.</p>
            <p>• Practical Classroom Activity:</p>
            <p className="tab">-	Use their lesson “Making a Stop Motion Animation”.</p>
            <p className="tab">-	Integrated Activity Idea: In a science unit about lifecycles, students use clay or paper cut-outs to animate the stages of a butterfly’s life using stop-motion apps like Stop Motion Studio.</p>
            <p>• Learning Outcome: Students understand animation techniques and apply them to depict scientific concepts.</p>
            <p>• Assessment: The assessment includes two parts: the clarity and creativity of stop-motion animation and how effectively students show their knowledge of the lifecycle.</p>
            <p>• Differentiation: Students requiring additional support should receive detailed visual instructions that guide them through the animation process.</p>
            <hr/>
            <p>4.	Common Sense Education – Digital Citizenship & Media Balance</p>
            <p>Website: <a href="https://www.commonsense.org/education" target="blank">https://www.commonsense.org/education</a></p>
            <p>• Purpose:</p>
            <p>Common Sense Education delivers educational activities for young students that explain how digital media works alongside lessons about screen time management and online communication techniques as well as media's everyday relevance.</p>
            <p>• Critique:</p>
            <p>Strengths: Excellent for teaching safe and thoughtful media use. Resources are interactive and come with teacher guides, discussion questions, and printables.</p>
            <p>Weaknesses: More focused on media literacy than media creation. Some concepts are targeted at slightly older students (Years 1–3), so adaptation is needed for 4–5-year-olds.</p>
            <p>• Practical Classroom Activity:</p>
            <p className="tab">-	Use the “Media Balance” lesson—kids draw pictures of online vs. offline activities.</p>
            <p className="tab">-	Integrated Activity Idea: During a wellbeing unit, discuss “what makes us feel good?” Students create a simple media diary, drawing when they watch TV vs. when they play outside—fostering media awareness and reflection.</p>
            <p>• Learning Outcome: Students recognize the balance between media use and physical activity, promoting digital well-being.</p>
            <p>• Assessment: Review students’ media diaries and their ability to reflect on the impact of media use.</p>
            <p>• Differentiation: Offer visuals of activities for students who need additional support in understanding the concept of media balance.</p>
            </div>
        </div>
    )
}