const WEBSITE_TEXT = {
    NAME: "Hi, I'm Joel",
    ABOUT_ME: "I'm a software engineering student at Rochester Institute of Technology who loves learning through projects. I have developed several apps for generating and accessing databases which prioritize usability. ",
    PROJECT_BUTTON: "Check out my projects",
    PROJECT_BUTTON_2: " my Projects",
    PROJECT_TITLE: "Projects"
}

const PROJECT_1_TEXT = {
    TITLE: "Sparda’s Jukebox",
    TECH_USED: "Python, SQLite, VLC",
    BULLET_POINT_1: "Terminal media player with pause, queue, and stop features",
    BULLET_POINT_2: "Can take 10 different arguments with up to 3 simultaneous search terms to find the user’s requested song",
    BULLET_POINT_3: "Plays up to 200 songs at the user’s request, with the ability to add more",
    BULLET_POINT_4: "Stores YouTube URLs parsed from a playlist link into a SQLite Database"
}

const PROJECT_2_TEXT = {
    TITLE: "Reverso Budgeter",
    TECH_USED: "Android Studio, Java",
    BULLET_POINT_1: "Android app which calculates how many items the user can buy based on funds, item cost, and tax",
    BULLET_POINT_2: "Intuitive UI which spans across 3 views",
    BULLET_POINT_3: "Published on Google Play Store (INSERT LINK HERE)",

}

const PROJECT_3_TEXT = {
        TITLE: "KC-Database Extractor ",
        TECH_USED: "Java, SQLite, Jsoup",
        BULLET_POINT_1: "Desktop app which generates a SQLite database of all 10,088 Yu-Gi-Oh! Trading Cards in 20 minutes",
        BULLET_POINT_2: "Employs threading to increase performance by 500% ",
        BULLET_POINT_3: "Scrapes data from the Official Yu-Gi-Oh! Database website and Yu-Gi-Oh! Wiki",
        BULLET_POINT_4: "Contains all card information such as images, card text, and most recent release pack",
        BULLET_POINT_5: "Simplistic UI for ease of use",
    }
    /*
    const PROJECT_X_TEXT = {
        Make sure when you compile, that no project has duplicat bullet points
        Ex.

        Good 
        p1      |   p2
        bp_x    |   bp_x
        bp_y    |   bp_y 
        
        Bad 
        p1
        bp_x
        bp_x


        TITLE: "",
        TECH_USED: "",
        BULLET_POINT_X: "",
    }
    */
module.exports = {
    WEBSITE_TEXT: WEBSITE_TEXT,
    PROJECT_1_TEXT: PROJECT_1_TEXT,
    PROJECT_2_TEXT: PROJECT_2_TEXT,
    PROJECT_3_TEXT: PROJECT_3_TEXT
}