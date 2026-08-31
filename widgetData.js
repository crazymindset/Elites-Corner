(function() {
  var html = `<!-- ELITE'S CORNER FULL WIDGET -->
<div id="eliteCornerWidget" style="box-sizing:border-box;position:relative;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Helvetica,Arial,sans-serif;background:radial-gradient(circle at 50% 0%,#181528 0%,#0c0a14 60%,#05040a 100%);border:1.5px solid rgba(241,196,15,.6);border-radius:20px;padding:16px;max-width:320px;margin:15px auto;color:#eee;box-shadow:0 0 25px rgba(241,196,15,.25);text-align:center;">
  
  <!-- HEADER -->
  <div style="font-size:17px;font-weight:800;color:#f1c40f;letter-spacing:1px;text-shadow:0 0 10px rgba(241,196,15,.6);margin-bottom:4px;">?? ELITE'S CORNER</div>
  <div style="font-size:11px;color:#00e5ff;font-weight:600;letter-spacing:.8px;margin-bottom:12px;text-shadow:0 0 8px rgba(0,229,255,.4);">COMMUNITY HUB &bull; LIVE</div>

  <!-- NAVIGATION BUTTONS -->
  <div style="display:flex;flex-direction:column;gap:8px;margin-bottom:14px;">
    <button onclick="document.querySelectorAll('.el-screen').forEach(s=>s.style.display='none');document.getElementById('el-scr-events').style.display='block';" style="background:rgba(241,196,15,.12);border:1px solid rgba(241,196,15,.5);color:#f1c40f;padding:9px;border-radius:10px;font-weight:700;cursor:pointer;font-size:12px;letter-spacing:.5px;transition:0.2s;">?? EVENTS & LIVE SCHEDULE</button>
    <button onclick="document.querySelectorAll('.el-screen').forEach(s=>s.style.display='none');document.getElementById('el-scr-ann').style.display='block';" style="background:rgba(0,229,255,.1);border:1px solid rgba(0,229,255,.4);color:#00e5ff;padding:9px;border-radius:10px;font-weight:700;cursor:pointer;font-size:12px;letter-spacing:.5px;">?? ANNOUNCEMENTS</button>
    <button onclick="document.querySelectorAll('.el-screen').forEach(s=>s.style.display='none');document.getElementById('el-scr-win').style.display='block';" style="background:rgba(168,85,247,.12);border:1px solid rgba(168,85,247,.5);color:#c084fc;padding:9px;border-radius:10px;font-weight:700;cursor:pointer;font-size:12px;letter-spacing:.5px;">?? HALL OF FAME</button>
    <button onclick="document.querySelectorAll('.el-screen').forEach(s=>s.style.display='none');document.getElementById('el-scr-vote').style.display='block';" style="background:rgba(236,72,153,.12);border:1px solid rgba(236,72,153,.5);color:#f472b6;padding:9px;border-radius:10px;font-weight:700;cursor:pointer;font-size:12px;letter-spacing:.5px;">??? VOTE (7 CATEGORIES)</button>
    <button onclick="document.querySelectorAll('.el-screen').forEach(s=>s.style.display='none');document.getElementById('el-scr-music').style.display='block';" style="background:rgba(34,197,94,.12);border:1px solid rgba(34,197,94,.5);color:#4ade80;padding:9px;border-radius:10px;font-weight:700;cursor:pointer;font-size:12px;letter-spacing:.5px;">?? LO-FI MUSIC STATION</button>
  </div>

  <!-- SCREEN: EVENTS -->
  <div id="el-scr-events" class="el-screen" style="display:none;background:rgba(0,0,0,.4);border:1px solid rgba(241,196,15,.3);border-radius:12px;padding:12px;margin-bottom:10px;">
    <div style="font-size:13px;font-weight:bold;color:#f1c40f;margin-bottom:6px;">? NEXT TOURNAMENT</div>
    <div style="font-size:12px;color:#ddd;margin-bottom:8px;">Elite Arena #4 &bull; Blitz 3+2</div>
    <a href="https://www.chess.com/club/elites-corner" target="_blank" style="display:inline-block;background:#f1c40f;color:#000;padding:6px 14px;border-radius:6px;font-size:11px;font-weight:bold;text-decoration:none;">JOIN TOURNAMENT</a>
    <div style="margin-top:10px;"><button onclick="document.querySelectorAll('.el-screen').forEach(s=>s.style.display='none');" style="background:transparent;border:none;color:#888;font-size:11px;cursor:pointer;">&larr; Back to Menu</button></div>
  </div>

  <!-- SCREEN: ANNOUNCEMENTS -->
  <div id="el-scr-ann" class="el-screen" style="display:none;background:rgba(0,0,0,.4);border:1px solid rgba(0,229,255,.3);border-radius:12px;padding:12px;margin-bottom:10px;">
    <div style="font-size:13px;font-weight:bold;color:#00e5ff;margin-bottom:6px;">?? CLUB UPDATES</div>
    <div style="font-size:11.5px;color:#ccc;line-height:1.4;">Welcome new members! Join our weekly Swiss and Blitz events every Saturday at 18:00 UTC.</div>
    <div style="margin-top:10px;"><button onclick="document.querySelectorAll('.el-screen').forEach(s=>s.style.display='none');" style="background:transparent;border:none;color:#888;font-size:11px;cursor:pointer;">&larr; Back to Menu</button></div>
  </div>

  <!-- SCREEN: WINNERS -->
  <div id="el-scr-win" class="el-screen" style="display:none;background:rgba(0,0,0,.4);border:1px solid rgba(168,85,247,.3);border-radius:12px;padding:12px;margin-bottom:10px;">
    <div style="font-size:13px;font-weight:bold;color:#c084fc;margin-bottom:6px;">?? HALL OF FAME</div>
    <div style="font-size:11.5px;color:#f1c40f;margin-bottom:3px;">?? Season Champion: @GrandmasterX</div>
    <div style="font-size:11.5px;color:#00e5ff;margin-bottom:3px;">?? Runner-Up: @TacticalKnight</div>
    <div style="font-size:11.5px;color:#4ade80;">?? 3rd Place: @QueenGambit</div>
    <div style="margin-top:10px;"><button onclick="document.querySelectorAll('.el-screen').forEach(s=>s.style.display='none');" style="background:transparent;border:none;color:#888;font-size:11px;cursor:pointer;">&larr; Back to Menu</button></div>
  </div>

  <!-- SCREEN: VOTE -->
  <div id="el-scr-vote" class="el-screen" style="display:none;background:rgba(0,0,0,.4);border:1px solid rgba(236,72,153,.3);border-radius:12px;padding:12px;margin-bottom:10px;">
    <div style="font-size:13px;font-weight:bold;color:#f472b6;margin-bottom:6px;">??? COMMUNITY VOTE</div>
    <div style="font-size:11.5px;color:#ddd;margin-bottom:8px;">Vote for this week's tournament format & club MVP!</div>
    <a href="https://forms.gle" target="_blank" style="display:inline-block;background:#ec4899;color:#fff;padding:6px 14px;border-radius:6px;font-size:11px;font-weight:bold;text-decoration:none;">OPEN BALLOT</a>
    <div style="margin-top:10px;"><button onclick="document.querySelectorAll('.el-screen').forEach(s=>s.style.display='none');" style="background:transparent;border:none;color:#888;font-size:11px;cursor:pointer;">&larr; Back to Menu</button></div>
  </div>

  <!-- SCREEN: MUSIC -->
  <div id="el-scr-music" class="el-screen" style="display:none;background:rgba(0,0,0,.4);border:1px solid rgba(34,197,94,.3);border-radius:12px;padding:12px;margin-bottom:10px;">
    <div style="font-size:13px;font-weight:bold;color:#4ade80;margin-bottom:6px;">?? LO-FI RADIO</div>
    <audio controls style="width:100%;height:32px;margin-top:6px;" src="https://raw.githubusercontent.com/crazymindset/Elites-Corner/main/song1.mp3"></audio>
    <div style="margin-top:10px;"><button onclick="document.querySelectorAll('.el-screen').forEach(s=>s.style.display='none');" style="background:transparent;border:none;color:#888;font-size:11px;cursor:pointer;">&larr; Back to Menu</button></div>
  </div>

</div>`;

  var target = document.getElementById('eliteMainContainer');
  if (target) {
    target.outerHTML = html;
  }
})();