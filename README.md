# فرانت‌اند استاتیک – آز مهندسی نرم‌افزار

## تیم
- سام
- علی

## توضیح پروژه
یک صفحه‌ی استاتیک آزمایشی که فرم تماس را با ورودی ایموجی، جدول پیام‌ها، امکان بارگذاری تصویر و استایل راست‌به‌چپ ترکیب می‌کند. این ریپو بیشتر برای تمرین گردش‌کار Git، پیاده‌سازی فیچرهای کوچک، ادغام تدریجی روی `dev` و در نهایت استقرار روی GitHub Pages استفاده می‌شود.

## استراتژی شاخه‌ها
- `main`: شاخه‌ی پایدار و منبع استقرار؛ پس از هر ادغام موفق (PR #8 و #9) و همچنین کامیت‌های مستندسازی «answering * question» به‌روز می‌شود.
- `dev`: شاخه‌ی ادغام که تغییرات فیچرها ابتدا در آن آزمون می‌شوند؛ هم‌اکنون روی آخرین وضعیت `main` ریبیس شده و آماده‌ی انتشار است.
- `feature/ui-layout`: مجموعه کامیت‌های اولیه‌ی ظاهر صفحه (لی‌اوت، تایپوگرافی و پشتیبانی RTL) که با PR #3 به کد اصلی اضافه شد.
- `emoji-panel`: شاخه‌ی مربوط به افزودن پنل ایموجی؛ قبل از Merge در PR #5 با `main` همگام شد تا تعارض‌های فرم حل شوند.
- `add-photo`: فیچر آپلود تصویر که در PR #4 ادغام شد و کنار emoji panel قرار گرفت.
- `6-adding-table-of-messages`: توسعه‌ی جدول پیام‌ها (کامیت 7b253ea) که با PR #9 به پروژه وارد شد.
- `7-adding-workflow-for-deploy`: شاخه‌ی CI/CD که Workflow استقرار GitHub Pages را اضافه کرد (PR #8).
- شاخه‌های آرشیوی مثل `feature/task-logic` یا mirrorهای `6-adding-table-of-messages` وضعیت تاریخی یا نسخه‌های درون PR را نگه می‌دارند.

## تاریخچه و گراف کامیت
```
* 499d9a9 (HEAD -> main) answering seventh question readme
* 506b2fc answering sixth question readme
* 900f0f7 answering fifth question readme
* 56aef16 answering forth question readme
* feda087 answering third question readme
* f76c5d4 answering second question readme
* 3a76ff7 answering first question readme
* 77353e5 updating readme
*   b2eef31 Merge pull request #9 from saamTheSoldier/6-adding-table-of-messages
|\  
| * 7b253ea (origin/6-adding-table-of-messages) feat: adds messages table
* |   30cdad1 Merge pull request #8 from saamTheSoldier/7-adding-workflow-for-deploy
|\ \  
| * | c84769b (7-adding-workflow-for-deploy) ci: add GitHub Actions workflow for Pages deployment
|/ /  
* |   36e861e (origin/dev) Merge pull request #5 from saamTheSoldier/emoji-panel
```
پس از ادغام فیچر جدول پیام، یک رشته کامیت مستندسازی در `main` به سؤالات نظری پاسخ داد. پیش از آن نیز فیچرهای UI، پنل ایموجی، آپلود تصویر و در نهایت Workflow استقرار به‌ترتیب وارد شده‌اند و سپس به شاخه‌ی اصلی منتقل شده‌اند.

## کامیت‌های مهم
| هش | تاریخ | نویسنده | توضیح |
| --- | --- | --- | --- |
| c37309d | 2025-11-17 | saam | ساخت اولیه‌ی پروژه به همراه README و اسکلت HTML |
| 48bc2b9 | 2025-11-17 | saam | افزودن لی‌اوت و فرم پایه |
| 5b162ee | 2025-11-17 | alitaghipour | افزودن پنل ایموجی برای پیام |
| fb0f1c4 | 2025-11-17 | alitaghipour | افزودن امکان بارگذاری تصویر |
| 7b253ea | 2025-11-17 | alitaghipour | افزودن جدول پیام‌ها و نمایش سوابق |
| b2eef31 | 2025-11-17 | MohammadHossein HaajiHosseini AKA saam | ادغام PR #9 برای جدول پیام |
| c84769b | 2025-11-17 | saam | تعریف Workflow دیپلوی GitHub Pages |
| 30cdad1 | 2025-11-17 | MohammadHossein HaajiHosseini AKA saam | ادغام PR #8 جهت فعال‌سازی Pipeline استقرار |
| 499d9a9 | 2025-11-17 | saam | تکمیل پاسخ هفتم سؤالات نظری در README |

## ادغام و رفع تعارض‌ها
- PR #3 (`feature/ui-layout`) عمدتاً HTML/CSS بود و بدون تعارض وارد شاخه‌ی مقصد شد.
- PR #4 (`add-photo`) و PR #5 (`emoji-panel`) روی یک فرم مشترک کار می‌کردند؛ پیش از Merge، شاخه‌ی `emoji-panel` با `main` همگام شد (`b67b19f`) تا کد پنل ایموجی و آپلود تصویر کنار هم قرار بگیرند.
- PR #9 (`6-adding-table-of-messages`) جدول پیام‌ها را به HTML و استایل اضافه کرد؛ این تغییرات بعد از تست روی `dev` با `main` ادغام شدند و جای کافی در کانتینر اصلی برای جدول در نظر گرفته شد.
- پس از این ادغام‌ها، چندین کامیت مستندسازی (answering first–seventh question) بدون تعارض روی README اعمال شدند تا بخش نظری تکمیل شود.

## CI/CD با GitHub Actions و GitHub Pages
- Workflow در مسیر `.github/workflows/deploy.yml` با عنوان «Deploy static site to GitHub Pages» قرار دارد.
- با هر `push` روی `main` اجرا می‌شود و دسترسی‌های `contents: read`, `pages: write`, `id-token: write` را تنظیم می‌کند.
- مراحل: checkout ریپو، پیکربندی محیط Pages (`actions/configure-pages@v5`)، آپلود artifact کل سایت (`actions/upload-pages-artifact@v3`) و در نهایت دیپلوی با `actions/deploy-pages@v4`.
- نشانی انتشار را پس از فعال‌شدن Pages به شکل `https://<username>.github.io/<repo-name>/` تکمیل کنید.

## سوالات نظری گیت
### ۱. پوشه‌ی `.git` چیست و چه اطلاعاتی در آن نگه‌داری می‌شود؟
پوشه‌ی `.git` قلب هر مخزن است و شامل همه‌ی object‌ها (blob، tree، commit، tag)، اشاره‌گرها در `refs/`, فایل `HEAD`, شاخص stage (`index`)، تنظیمات (`config`) و hookها است. این ساختار با `git init` ساخته می‌شود و هنگام `git clone` نیز خودکار ایجاد می‌گردد.

### ۲. اتمیک بودن در کامیت و Pull Request چه معنایی دارد؟
- **کامیت اتمیک** تنها یک تغییر منطقی را دربر می‌گیرد؛ همین موضوع تاریخچه را خوانا و فرآیند revert یا تست را ساده می‌کند.
- **Pull Request اتمیک** هم فقط یک موضوع (فیچر یا باگ‌فیکس) را پوشش می‌دهد تا بازبینی و ادغام کنترل‌شده باشد.

### ۳. تفاوت fetch، pull، merge، rebase و cherry-pick چیست؟
- `git fetch`: فقط تغییرات remote را دریافت می‌کند و برنچ فعلی را دست‌نخورده می‌گذارد.
- `git pull`: برابر با fetch + merge (یا rebase، اگر تنظیم شده باشد) و تغییرات را بلافاصله روی برنچ فعال اعمال می‌کند.
- `git merge`: دو شاخه را ترکیب می‌کند و یک merge commit می‌سازد بدون بازنویسی تاریخچه.
- `git rebase`: کامیت‌های شاخه‌ی فعلی را روی پایه‌ی جدید بازپخش می‌کند و تاریخچه را خطی نگه می‌دارد؛ روی برنچ مشترک باید با احتیاط استفاده شود.
- `git cherry-pick`: یک یا چند commit را از هر نقطه‌ی تاریخچه برداشته و روی برنچ فعلی اعمال می‌کند تا فقط همان تغییر وارد شود.

### ۴. تفاوت reset، revert، restore، switch و checkout چیست؟
- `git reset`: HEAD (و در حالت hard/soft/mixed استیج و فایل‌ها) را به commit قبلی برمی‌گرداند؛ `--hard` تمام تغییرات را حذف می‌کند.
- `git revert`: بدون پاک‌کردن تاریخچه، یک commit جدید می‌سازد که اثر commit قبلی را خنثی می‌کند؛ مناسب برنچ‌های اشتراکی.
- `git restore`: نگارش مدرن برای برگرداندن فایل‌ها از commit یا stage به working directory است.
- `git switch`: دستور جدید برای جابه‌جایی بین شاخه‌ها بدون دست‌کاری فایل‌ها.
- `git checkout`: دستور قدیمی چندمنظوره که هم برای تغییر شاخه و هم بازیابی فایل استفاده می‌شد؛ امروزه `switch` و `restore` جایگزین تمیزتری هستند.

### ۵. Stage یا Index چیست و `git stash` چه می‌کند؟
Stage (یا index) لایه‌ی میانی بین working directory و commit است؛ هرچه با `git add` علامت‌گذاری شود مستقیماً وارد commit بعدی خواهد شد. `git stash` تغییرات stage و working directory را موقتاً ذخیره کرده و محیط را پاک می‌کند تا بتوان روی برنچ دیگری کار کرد؛ بعداً با `stash pop/apply` می‌توان آن تغییرات را برگرداند.

### ۶. Snapshot در Git یعنی چه و چه نسبتی با commit دارد؟
هر commit در Git یک snapshot تقریباً کامل از پروژه است؛ فقط فایل‌های تغییر کرده دوباره ذخیره می‌شوند و بقیه به نسخه‌های قبلی اشاره دارند. Diff صرفاً مقایسه‌ی دو snapshot است و با checkout هر commit، پروژه دقیقاً به همان وضعیت باز می‌گردد.

### ۷. تفاوت ریپوی محلی و ریپوی ریموت چیست؟
ریپوی محلی روی دستگاه توسعه‌دهنده است و حتی بدون اینترنت قابل استفاده است؛ تا زمانی که `git push` انجام نشود کسی آن تغییرات را نمی‌بیند. ریپوی ریموت (GitHub/GitLab/...) محل اشتراک گذاشتن، همکاری، CI/CD و اعمال محدودیت‌هایی مثل branch protection است. `fetch/pull` برای دریافت و `push` برای ارسال تغییرات میان این دو استفاده می‌شود.
