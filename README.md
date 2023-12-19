<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800&family=Noto+Sans+Thai:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet">

<style>
  *:not(span) {
    font-family: 'Noto Sans Thai', sans-serif;
  }

  span {
    font-family: 'JetBrains Mono', monospace;
  }
</style>

# Web Front End Fundamentals

## Welcome to The Repository

### Greetings

ยินดีต้อนรับทุกคนเข้าสู่ Repository ของผมครับ ผมตั้งใจไว้นานแล้วว่าอยากจะสร้างโปรเจคเล็ก ๆ ที่จะช่วยแบ่งปันความรู้ให้ผู้อื่น ประกอบกับการที่ช่วงนี้ผมได้ทำงานเป็น Front-end Developer อยู่ ซึ่งทำให้ผมได้ใช้ความรู้เกี่ยวกับ HTML, CSS, และ  JavaScript อยู่ตลอด โปรเจคนี้ก็เลยถือกำเนิดขึ้น

ผมหวังว่าโปรเจคนี้จะได้ช่วยใครหลาย ๆ คนนะครับ

### Requirements

โปรเจคนี้ถูกออกแบบมาเพื่อให้ผู้ที่สนใจทำการ Clone โปรเจคนี้และเรียนรู้จากตัวอย่างโค้ดและคำอธิบายต่าง ๆ แต่ถ้าหากผู้ที่ไม่สะดวกในการ Clone โปรเจคนี้ลงมาบนเครื่องคอมพิวเตอร์ของตัวเอง คุณก็สามารถที่จะอ่านคำอธิบายและดูตัวอย่างผ่าน GitHub Repository นี้ได้เลย

การจะดูตัวอย่างหน้าเพจที่เขียนขึ้นมาในโปรเจคจำเป็นต้องอาศัยการ Clone โปรเจคนี้ลงมา และทำการเปิดไฟล์ HTML บน Browser โดยวิธีการเปิดนั้นก็สามารถทำได้ทั้งการเปิดโดย Broswer ตรง ๆ หรือการใช้เครื่องมืออื่นช่วย (เช่นการเปิด Local Server)

อุปกรณ์ที่ผมแนะนำ

- Visual Studio Code

  - [**Live Preview**](https://marketplace.visualstudio.com/items?itemName=ms-vscode.live-server) (Extension from [Microsoft](https://marketplace.visualstudio.com/publishers/Microsoft)) ใช้สำหรับดูหน้าเพจที่เขียนขึ้นมาด้วยไฟล์ <span>`.html`</span> ใช้งานง่าย แค่คลิกขวาที่ไฟล์ที่ต้องการดูหน้าเพจและเลือก "Show Preview"
  - [**Highlight Matching Tag**](https://marketplace.visualstudio.com/items?itemName=vincaslt.highlight-matching-tag) (Extension form [vincaslt](https://marketplace.visualstudio.com/publishers/vincaslt)) เป็นตัวช่วยที่ดีในการแสดงคู่แท็กเปิด-ปิดของ Element

### Feedback and Request

ตอนนี้ผมยังไม่มีช่องทางในการเปิดรับฟีดแบคและคำร้องในเรื่องต่าง ๆ ครับ

## Homepage

### Talk about "Fundamentals"



### What's in this home page?

ในหน้าโฮมเพจนี้ ผมอยากให้ทุกคนสังเกตการจัดการกลุ่ม HTML Element ที่ผมเลือกใช้ ตั้งแต่ element ย่อยใน <span>`<head> ... </head>`</span> และใน <span>`<body> ... </body>`</span> ซึ่งจะเห็นได้ว่าภายใน <span>`<head></head>`</span> นั้นประกอบไปด้วยสิ่งต่าง ๆ ที่จำเป็นเพื่อที่จะทำให้เนื้อหาภายใน <span>`<body></body>`</span> แสดงผลออกมาได้อย่างที่ผมคาดหวัง (จากการเชื่อมกับไฟล์ CSS และจากการจัดการ viewport เพื่อให้การทำงานกับ media query เป็นไปตามปกติ) และยังทำให้เพจของผมมีข้อมูล metadata ที่จำเป็นด้วย