import Head from 'next/head';

import styles from '@/styles/Home.module.css';

export default function Home() {
  return (
    <>
      <Head>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap" rel="stylesheet" />
        <title>My Portfolio</title>
      </Head>
      <header>
        <nav>
            <div class="left">My Portfolio</div>
            <div class="right">
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/">About</a></li>
                    <li><a href="/">Resume</a></li>
                    <li><a href="/">Projects</a></li>
                    <li><a href="/">Contact Me</a></li>
                </ul>
            </div>
        </nav>
    </header>

    <main>
        <section class="firstSection">
            <div class="leftSection">
                Hi, My name is <span class="purple">Himanshu</span>
                <div>and I am a </div>
                <span id="element"></span>
                <div class="buttons">
                    <button class="btn"><a href="https://drive.google.com/file/d/1N6AV6kD8P29y7PIb3vrbcNDrF_AwYypb/view?usp=sharing">Download Resume</a></button>
                    <button class="btn"><a href="https://github.com/23himanshusingh">Visit Github</a></button>
                </div>
            </div>
            <div class="rightSection">
                <img src="./my_img.png" alt="" />
            </div>
        </section>
        <hr/>
        <section class="secondSection">
            <span class="textgray">What I have done so far</span>
            <h1>Work Experience</h1>
            <div class="box">
                <div class="vertical">
                    <img class="image-top" src="./HackerRank_logo.png" alt=""/>
                    <div class="vertical-text">
                        <a href="https://www.hackerrank.com/himanshusinghgk1?hr_r=1">HACKERRANK</a>
                    </div>
                </div>
                <div class="vertical">
                    <img class="image-top" src="./GFG_LOGO.png" alt=""/>
                    <div class="vertical-text">
                        <a href="https://auth.geeksforgeeks.org/user/himanshusingh2021c/practice">GFG</a>
                    </div>
                </div>
                <div class="vertical">
                    <img class="image-top" src="./codeforces_logo.png" alt=""/>
                    <div class="vertical-text">
                        <a href="https://codeforces.com/profile/himanshusinghgkp1818">CODEFORCES</a>
                    </div>
                </div>
                <div class="vertical">
                    <img class="image-top" src="./leetcode_logo.png" alt=""/>
                    <div class="vertical-text">
                        <a href="https://leetcode.com/Himanshu_Singh11/">LEETCODE</a>
                    </div>
                </div>
                <div class="vertical">
                    <img class="image-top" src="./codechef_logo.png" alt=""/>
                    <div class="vertical-text">
                        <a href="https://www.codechef.com/users/himanshu231102">CODECHEF</a>
                    </div>
                </div>
            </div>
        </section>
    </main>

    <div id="contact">
        <h1>Contact</h1>
        <form action="" id="myForm">
            Name: <input type="text" name="username" required=""/>
            <br/> <br/>
            Email: <input type="email" name="" id="" required=""/>
            <br/> <br/>
            Number: <input type="number" name="" id="" required=""/>
            <br/> <br/>
            Message: <textarea name="" id="" cols="30" rows="10"></textarea>
            <br/> <br/>
            <button class="submit">Submit</button>
        </form>
    </div>
    <footer>
        <p>&copy; 2023 Himanshu. All Rights Reserved.</p>
    </footer>
    </>
  );
}
