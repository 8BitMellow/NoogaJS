Uberjuju
========

<h3>What is Uberjuju?</h3>
Uberjuju is a core repository used by 8-Bit Mellow that provides a basic developer workflow using node.js, npm (node package manager), and grunt.js that we use to build Javascript Applications. 

<h3>Basic Directory and File Structure</h3>

<b>app</b> <i>(directory - application)</i>
  
+ <b>dist</b> <i>(directory - production distribution)</i>
    - <b>index.html</b> <i>(file - main index.html)</i>
    + <b>css</b> <i>(directory - application stylesheets)</i>
    + <b>img</b> <i>(directory - application images)</i>
    + <b>js</b> <i>(directory - application javascripts)</i>
    + <b>tmpl</b> <i>(directory - application js templates)</i>
  
+ <b>tasks</b> <i>(directory - grunt tasks)</i>
  
+ <b>grunt</b> <i>(directory - grunt local installation)</i>
  
+ <b>node_modules</b> <i>(folder - local npm plugin installations)</i>
  
+ <b>dev</b> <i>(directory - development distribution)</i>
    - <b>index.html</b> <i>(file - main index.html dev)</i>
    + <b>source</b> <i>(directory - application source)</i>
        + <b>css</b> <i>(directory - application stylesheets)</i>
        + <b>img</b> <i>(directory - application images)</i>
        + <b>js</b> <i>(directory - application javascripts)</i>
        + <b>tmpl</b> <i>(directory - application js templates)</i>
    + <b>vendor</b>  <i>(directory - third party files)</i>
        + <b>css</b> <i>(directory - third party stylesheets)</i>
        + <b>img</b> <i>(directory - third party images)</i>
        + <b>js</b> <i>(directory - third party javascripts)</i>
  
- <b>Gruntfile.js</b>
- <b>package.json</b>


<h3>Requirements:</h3>
 - Node
 - npm (node package manager)
 - Grunt.js

<h3>Install Instructions</h3>

<h4>STEP 1 - INSTALL NODE</h4>

1. GO TO URL http://nodejs.org/
2. DOWNLOAD CURRENT VERSION (v.0.10.15 at time of this update 8/1/13)
3. OPEN node-v0.10.15.pkg TO LAUNCH NODE INSTALLER
4. WALK THROUGH NODE & NPM INSTALLER
5. INSTALLATION COMPLETED

NOTE:
- Node was installed at /usr/local/bin/node
- npm was installed at /usr/local/bin/npm


<h4>STEP 2 - CONFIRM INSTALLATION</h4>

1. OPEN NEW TERMINAL WINDOW
2. USE THE FOLLOWING COMMANDS TO CONFIRM VERSIONS OF NODE AND NPM

	- node -v [enter]
	v.0.10.15

	- npm -v [enter]
	1.3.5


<h4>STEP 3 - INSTALL GRUNT GLOBAL COMMAND LINE INTERFACE</h4>

1. USE THE FOLLOWING COMMANDS TO INSTALL GRUNT CLI GLOBALLY

	- sudo npm install grunt-cli -g [enter]
	- Password: <Password> [enter]


<h4>STEP 4 - INSTALL LOCAL GRUNT</h4>

1. OPEN NEW TERMINAL WINDOW
2. CHANGE DIRECTORY TO BASE APPLICATION (ROOT) DIRECTORY
3. USE THE FOLLOWING COMMANDS TO INSTALL LOCAL GRUNT AND CORE GRUNT-CONTRIB PLUGINS

	- npm install grunt --save  [enter]
	- npm install grunt-contrib-concat --save [enter]
	- npm install grunt-contrib-copy --save [enter]
	- npm install grunt-contrib-cssmin --save [enter]
	- npm install grunt-contrib-uglify --save [enter]
	- npm install grunt-contrib-watch --save [enter]
    

==========
<h3>About Us</h3>
Uberjuju is current project that is supported by <a href="http://8-bit.me" target="_blank">8-Bit Mellow</a>, a group of open source workafrolics based in <a href="http://thegigcity.com" target="_blank">The Gig City</a>.  

<h3>The <b>WHY</b></h3>
At <a href="http://8-bit.me" target="_blank">8-Bit Mellow</a> we believe that we all...
<ul>
	<li>- possess a deeply human desire to create and to learn.</li>
	<li>- want to be part of something bigger than ourselves.</li>
	<li>- are driven to share our gifts in the service of others.</li>
	<li>- can change the world by doing better by our community.</li>
</ul>

<h3>So... what's with the name <a href="http://8-Bit.me" target="_blank">8-Bit Mellow</a>?</h3>
<p>They had me at 8-Bit. I grew up with technology in the 1980's and it was my experience with 8-Bit computers and 8-Bit gaming consoles where I first fell in love with technology, design, and open source.</p>
<p>Today, it is way to easy to get distracted… to get caught up in the flow of the day to day grind and pulled away from what you love. A new vision and model for our businesses and organizations needs to emerge which is based on intrinsic motivation and self-direction.</p>
<p>As I look around I see that the world is quickly changing in an incredibly fantastic way where the line between work and play is blurring away and the blending of career and hobby is becoming more possible.  At the end of the day, I am confident that it will be our passion that pushes us to succeed in breaking through brick walls to overcome 21st century challenges.</p>
<p>Hobby Your Day Job,<br>
-Brian Hooper (Starter | Co-Founder)</p>