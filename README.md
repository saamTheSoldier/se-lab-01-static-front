# فرانت‌اند استاتیک – آز مهندسی نرم‌افزار

## تیم
- سام
- علی

## توضیح پروژه
یک صفحه‌ی فرانت‌اند استاتیک آزمایشی که فرم تماس را با ورودی ایموجی، بارگذاری تصویر و استایل راست‌به‌چپ تمیز ترکیب می‌کند. هدف اصلی، تمرین گردش‌کار گیت، ادغام شاخه‌های کوچک و پیاده‌سازی ساده‌ی دیپلوی در GitHub Pages است.

## استراتژی شاخه‌ها
- `main`: شاخه‌ی پایدار نهایی که فقط پس از مرور تغییرها (مثل PR #8 برای استقرار) به‌روزرسانی می‌شود.
- `dev`: شاخه‌ی ادغام برای جمع کردن فیچرها (ایموجی، جدول پیام‌ها) پیش از انتشار روی `main`.
- `feature/ui-layout`: توسعه‌ی تدریجی UI (لی‌اوت اولیه، تایپوگرافی، راست‌چین) که با PR #3 وارد شد.
- `emoji-panel`: اضافه‌کردن پنل ایموجی؛ قبل از Merge روی `dev` با `main` هماهنگ شد (`b67b19f`).
- `add-photo`: افزودن امکان آپلود تصویر که به‌وسیله‌ی PR #4 ادغام شد.
- `7-adding-workflow-for-deploy`: زیرساخت CI/CD برای تعریف Workflow دیپلوی (PR #8).
- شاخه‌های بایگانی نظیر `feature/task-logic` و `6-adding-table-of-messages` تاریخچه‌ی آزمایشی/آینه‌ی PRها را نگه می‌دارند.

## تاریخچه و گراف کامیت
```
*   30cdad1 (main) Merge pull request #8 from saamTheSoldier/7-adding-workflow-for-deploy
|\  
| * c84769b (7-adding-workflow-for-deploy) ci: add GitHub Actions workflow for Pages deployment
|/  
*   36e861e (dev) Merge pull request #5 from saamTheSoldier/emoji-panel
|\  
| *   b67b19f (emoji-panel) Merge branch 'main' into emoji-panel
| |\  
| |/  
|/|   
* |   eddf7f8 Merge pull request #4 from saamTheSoldier/add-photo
|\ \  
| * | fb0f1c4 feat: Adds upload image
| | * 5b162ee feat: Adds emoji panel to message text area
| |/  
| * c650247 Merge pull request #3 from saamTheSoldier/feature/ui-layout
|/| 
| * 819e3ef chore(ui): fix rtl for persian texts
| * 84b6238 feat(ui): add footer and about section
| * 44285f0 style(ui): improve layout spacing and typography
| * 48bc2b9 feat(ui): add basic page layout and task form structure
|/  
* c37309d chore: initial project setup with README, .gitignore, and basic HTML skeleton
```
ابتدا اسکلت پروژه ساخته شد، سپس شاخه‌ی `feature/ui-layout` ظاهر صفحه را تکمیل کرد. در ادامه فیچرهای فرم (ایموجی و آپلود) روی شاخه‌های مجزا توسعه یافتند و در `dev` ادغام شدند. گام پایانی اضافه‌شدن Workflow و Merge آن به `main` بود.

## کامیت‌های مهم
| هش | تاریخ | نویسنده | توضیح |
| --- | --- | --- | --- |
| c37309d | 2025-11-17 | saam | ساخت اولیه‌ی پروژه به همراه README و اسکلت HTML |
| 48bc2b9 | 2025-11-17 | saam | افزودن لی‌اوت و فرم پایه |
| 5b162ee | 2025-11-17 | alitaghipour | افزودن پنل ایموجی برای پیام |
| fb0f1c4 | 2025-11-17 | alitaghipour | افزودن امکان بارگذاری تصویر |
| eddf7f8 | 2025-11-17 | MohammadHossein HaajiHosseini AKA saam | ادغام PR #4 برای اضافه‌کردن آپلود عکس |
| c84769b | 2025-11-17 | saam | تعریف Workflow دیپلوی GitHub Pages |
| 30cdad1 | 2025-11-17 | MohammadHossein HaajiHosseini AKA saam | ادغام PR #8 جهت فعال‌سازی Pipeline استقرار |

## ادغام و رفع تعارض‌ها
- PR #3 (`feature/ui-layout`) فقط HTML/CSS را لمس کرد و بدون تعارض جدی وارد شاخه‌ی مقصد شد.
- PR #4 (`add-photo`) فیچر آپلود را وارد کرد و هم‌زمان با تغییرات ایموجی توسعه داده شد؛ Merge `eddf7f8` هر دو فیچر را کنار هم نگه داشت.
- PR #5 شاخه‌ی `emoji-panel` را وارد `dev` کرد. برای جلوگیری از تعارض فرم، پیش از Merge یک همگام‌سازی با `main` انجام شد (`b67b19f`) تا تغییرات فرم و اسکریپت‌ها با هم ترکیب شوند.
- PR #8 شاخه‌ی CI/CD را به `main` آورد؛ فقط فایل Workflow را تغییر می‌داد و بدون تعارض بود اما نیازمند تنظیم دسترسی برای Pages شد.

## CI/CD با GitHub Actions و GitHub Pages
- فایل Workflow: `.github/workflows/deploy.yml` با عنوان «Deploy static site to GitHub Pages».
- تریگر: `push` روی شاخه‌ی `main` همراه با دسترسی لازم برای Pages.
- مراحل: Checkout ریپو، پیکربندی محیط Pages، آپلود تمام سایت به‌عنوان artifact و در نهایت دیپلوی با `actions/deploy-pages@v4`.
- آدرس انتشار (به‌روزرسانی پس از استقرار واقعی): https://saamthesoldier.github.io/se-lab-01-static-front

## سوالات نظری گیت (جای خالی)
### ساختار داخلی پوشه‌ی `.git`
## ۱. پوشه‌ی `.git` چیست؟ چه اطلاعاتی در آن ذخیره می‌شود؟ با چه دستوری ساخته می‌شود؟

پوشه‌ی `.git` هسته‌ی اصلی هر مخزن Git است و تمام داده‌ها و متادیتای مربوط به تاریخچه‌ی پروژه را در خود نگه می‌دهد. این پوشه شامل موارد زیر است:

- **objects/**: شامل blob‌ ها (محتوای فایل‌ها)، tree‌ ها (ساختار پوشه‌ها)، commit‌ ها و tagها  
- **refs/**: نگه‌دارنده‌ی اشاره‌گرهای برنچ‌ها و تگ‌ها  
- **HEAD**: نشان می‌دهد الان روی کدام برنچ هستیم  
- **index (stage)**: وضعیت فایل‌هایی که آماده commit شدن هستند  
- **config**: تنظیمات مخزن (remote، ایمیل، نام کاربر و ...)  
- **hooks/**: اسکریپت‌های قبل و بعد از عملیات Git  

این پوشه با دستور زیر ساخته می‌شود:

```bash
git init
````

یا هنگام clone به‌صورت خودکار ایجاد می‌شود.

---

### فلسفه‌ی کامیت‌های اتمی
## ۲. منظور از atomic بودن در atomic commit و atomic pull-request چیست؟

* Atomic Commit: کامیتی که فقط شامل یک «تغییر منطقی واحد» است (مثلاً فقط یک باگ‌فیکس یا یک فیچر کوچک).

  * خوانایی تاریخچه، امکان revert راحت و تست‌پذیری را افزایش می‌دهد.

* Atomic Pull Request: یک PR که فقط یک موضوع واحد را پوشش می‌دهد (یک فیچر، یک refactor، یا یک باگ‌فیکس مشخص).

  * باعث ساده شدن code review و جلوگیری از تغییرات ناخواسته می‌شود.

---

### تفاوت `git fetch` و `git pull`
## ۳. تفاوت دستورهای fetch و pull و merge و rebase و cherry-pick

### git fetch

فقط تغییرات جدید remote را دریافت می‌کند، اما برنچ فعلی را تغییر نمی‌دهد.

### git pull

درواقع fetch + merge (یا rebase در صورت تنظیم).
تغییرات remote را دانلود و سپس فوراً روی برنچ فعلی اعمال می‌کند.

### git merge

دو برنچ را باهم ادغام کرده و یک merge commit ایجاد می‌کند.
تاریخچه را بازنویسی نمی‌کند.

### git rebase

کامیت‌های یک برنچ را روی پایه‌ی جدید (base جدید) دوباره اعمال می‌کند و تاریخچه را خطی می‌کند.
history را بازنویسی می‌کند، پس روی برنچ‌های مشترک باید با احتیاط استفاده شود.

### git cherry-pick

یک یا چند commit خاص را از هر جای تاریخچه برداشته و روی برنچ فعلی اعمال می‌کند.
(تاریخچه را به‌هم نمی‌دوزد؛ فقط محتوای آن commit را منتقل می‌کند.)

---

### فست‌فوروارد در برابر مرج واقعی
## ۴. تفاوت دستورهای reset و revert و restore و switch و checkout

### git reset

HEAD و گاهی staging و working directory را به یک commit قبلی بازمی‌گرداند.
سه حالت اصلی:

* --soft: فقط HEAD تغییر می‌کند
* --mixed (پیش‌فرض): HEAD + پاک شدن stage
* --hard: HEAD + stage + فایل‌ها → حذف کامل تغییرات

### git revert

یک commit جدید می‌سازد که تغییرات commit قبلی را خنثی می‌کند.
تاریخچه را پاک نمی‌کند → مناسب برای برنچ‌های مشترک.

### git restore

برای بازیابی فایل‌ها از commitهای قبلی یا از stage به working directory.
جایگزین مدرن بخش فایل‌محور checkout.

### git switch

برای تغییر برنچ استفاده می‌شود.
جایگزین مدرن بخش برنچ‌محور checkout.

### git checkout

دستور قدیمی چندمنظوره برای:

* تغییر برنچ
* بازیابی فایل‌ها از commit
  امروز بهتر است از switch و restore استفاده شود.

---

### مراحل رفع تعارض‌های مرج
