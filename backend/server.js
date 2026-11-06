// backend/server.js
// ملف الخادم الأساسي لمساعد أحمد الذكي (Express Server)

const express = require('express');
const bodyParser = require('body-parser');
const modelCoordinator = require('./coordinator');

const app = express();
const PORT = process.env.PORT || 3000;

// استخدام تحليل البيانات بصيغة JSON
app.use(bodyParser.json());

// مسار رئيسي لاختبار عمل السيرفر والمساعد
app.get('/', (req, res) => {
    res.json({
        status: "online",
        message: "أهلاً بك، مساعد أحمد الذكي يعمل بكامل كفاءته وسلطته السورية! 🚀"
    });
});

// مسار استقبال رسائل ومحادثات المستخدم
app.post('/api/chat', async (req, res) => {
    try {
        const { message, context } = req.body;
        
        if (!message) {
            return res.status(400).json({ error: "يا عيني، وين الرسالة؟ ابعت شي لنحكي فيه!" });
        }

        // تمرير الطلب للمنسق المركزي (ChatGPT + الاستشاريين)
        const result = await modelCoordinator.processRequest(message, context);
        
        res.json({
            success: true,
            data: result
        });

    } catch (error) {
        console.error("صار في خطأ بمعالجة الطلب:", error);
        res.status(500).json({ 
            success: false, 
            error: "معلش يا أحمد، صار في طارشة تقنية صغيرة بالخادم، وعم نظبطها ثواني وتكون جاهزة." 
        });
    }
});

// تشغيل السيرفر على المنفذ المحدد
app.listen(PORT, () => {
    console.log(`مساعد أحمد الذكي شغّال وعم يسمعك على المنفذ رقم: ${PORT}`);
});
