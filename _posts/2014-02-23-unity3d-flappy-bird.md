---
layout: post-light-feature
title: "Tutorial: How to Make Flappy Bird in Unity3D"
description: "Yes, using a 3D game engine for a 2D game."
category: articles
tags: [unity3d, unity, games, ios]
image:
  feature: unity3d-flappy-bird/playing.png
---
<script>
 (function(d, t) {
    var g = d.createElement(t),
        s = d.getElementsByTagName(t)[0];
    g.src = 'http://assets.gfycat.com/js/gfyajax-0.517d.js';
    s.parentNode.insertBefore(g, s);
}(document, 'script'));
</script>
This is a tutorial that will teach you how to make a clone of Flappy Bird called Tappy Plane using Unity3D. You should use this tutorial if you're a beginner to Unity 2D game development with some C# programming experience. Let's get started!

<video height="598" width="756" playsinline autoplay muted loop tabindex="-1" style="margin-left:-25"><source src="/images/unity3d-flappy-bird/BossyUnselfishBluebottle.webm" type="video/webm"></video>

<span class="note">
The complete project code can be found on [Github](https://github.com/anwell/TappyPlane)
</span>

<span class="note">
All images used under Creative Commons from [Kenney Vleugels](http://www.kenney.nl)
</span>

## Install Unity
[Unity3D](http://unity3d.com/unity/download) is a free game development engine. Although Unity3D has "3D" in it, its most recent version supports the creation of 2D games. When you create a game on Unity, it can be run on iOS, Android, Windows Phone, the Web, and many other platforms.

![Unity3D logo](/images/unity3d-flappy-bird/unity.jpg)

## Create a new project
When you open up Unity, this should be the first window you see.

<video height="562" width="756" playsinline autoplay muted loop tabindex="-1"><source src="/images/unity3d-flappy-bird/LastReadyAnnashummingbird.webm" type="video/webm"></video>

Go to the *Create New Project* tab and select the folder to put it in. The name can be changed later. Change the setup defaults for at the bottom to be *2D*. Then press the *Create* button.

## Organize your project
After creating the project, you should be greeted with this blank screen.

![New layout](/images/unity3d-flappy-bird/layout.PNG)

Navigate over to the *Project* window at the bottom to create the folder structure you need to organize your files. Add four folders called "Prefabs", "Scenes", "Scripts", and "Textures".

<video height="524" width="708" playsinline autoplay muted loop tabindex="-1"><source src="/images/unity3d-flappy-bird/FatDamagedKatydid.webm" type="video/webm"></video>

Here's an explanation for what type of file each folder holds.

### Prefabs
In Unity, a Prefab is an object that can be reused and created such as bullets, enemies, or walls. 

### Scenes
A scene is like a level of a game.

### Scripts
This folder will hold all the code. 

### Textures
All the images used in the game. In 2D gaming, these images are called "Sprites".

## Set up the background
Save this image to the <code>Textures</code> folder you created.
<figure>
<img src="/images/unity3d-flappy-bird/background.png" alt="background sprite">
<figcaption>Add to textures folder</figcaption><br>
</figure>

Drag the image into the center main Scene area. Using the inspector, set the scale to be <code>2.5</code> in both the *X* and *Y* fields.

<video height="790" width="1228" playsinline autoplay muted loop tabindex="-1" class="oversized"><source src="/images/unity3d-flappy-bird/LittleSoulfulDouglasfirbarkbeetle.webm" type="video/webm"></video>

## Add the player
Save this image to the <code>Textures</code> folder. Drag and drop it into the scene just as you did with the background.
<figure>
<img src="/images/unity3d-flappy-bird/player.png" style="width:88px;" alt="player sprite">
<figcaption>Add to textures folder</figcaption><br>
</figure>
Set the value of *Z* in the right side bar under *Transform* to `-1`. This ensures that the player will always be in the front.

In the inspector, click *Add Component*, type "Rigidbody 2D", and press enter. A Rigidbody component gives the airplane gravity and other physics characteristics.

<video height="704" width="276" playsinline autoplay muted loop tabindex="-1" class="center"><source src="/images/unity3d-flappy-bird/OnlyLividDassie.webm" type="video/webm"></video>

Press the triangle Play button at the top of the screen. You should see the plane falling as it adheres to gravity.

<video height="410" width="468" playsinline autoplay muted loop tabindex="-1" class="center"><source src="/images/unity3d-flappy-bird/GiantWateryAfricanfisheagle.webm" type="video/webm"></video>

## Controlling the Player
Now we're going to create a script that allows the player to move. Inside the Scripts folder, create a C# file called <code>Player.cs</code>. Fill the contents with this code:

{% highlight csharp %}
using UnityEngine;

public class Player : MonoBehaviour
{
	// The force which is added when the player jumps
	// This can be changed in the Inspector window
	public Vector2 jumpForce = new Vector2(0, 300);
	
	// Update is called once per frame
	void Update ()
	{
		// Jump
		if (Input.GetKeyUp("space"))
		{
			rigidbody2D.velocity = Vector2.zero;
			rigidbody2D.AddForce(jumpForce);
		}
	}
}
{% endhighlight %}

There are two main parts in this code: the <code>jumpForce</code> variable and the <code>Update</code> method. 

- <code>jumpForce</code> stores the force applied to the player when we jump. 
	- It is of the <code>Vector2</code> type, meaning that it stores two values: <code>x</code> and <code>y</code>.
	- Because this variable is public, you can change its value in the Inspector.
- The <code>Update</code> method is a function that is called every frame of the game. In it, if the spacebar button is pressed, a force is added to the rigidbody.

Add this script to the Player object the same way you added the RigidBody 2D, with the *Add Component* button. Now  when you press Play, you'll be able to jump up and fall back down.

## Creating the obstacles
<figure>
<img src="/images/unity3d-flappy-bird/rockDown.png" style="width:108px;" alt="background sprite">
<img src="/images/unity3d-flappy-bird/rock.png" style="width:108px;" alt="background sprite">
<figcaption>Add to textures folder</figcaption><br>
</figure>
Drag these two images in and once again, save them into the <code>Textures</code> folder. Drag these images onto the Scene and in the Inspector, change their *X* and *Y* scales to be <code>2.5</code>.

Position these objects so that they are above each other, to the right of the background, and wide enough apart that the player can jump through them.

<video height="352" width="712" playsinline autoplay muted loop tabindex="-1"><source src="/images/unity3d-flappy-bird/MeekImpishArcticduck.webm" type="video/webm"></video>

In the file menu, go to *GameObject*->*Create Empty*. This will add an object to the scene that is invisible and will serve as a folder that holds our rock obstacles. Name it "RockPair". Drag the two rock GameObjects onto the RockPair object.

<video height="410" width="376" playsinline autoplay muted loop tabindex="-1" class="center"><source src="/images/unity3d-flappy-bird/PowerfulFemaleBengaltiger.webm" type="video/webm"></video>

## Moving the obstacles
Add a "RigidBody 2D" component to the RockPair parent object. In the inspector, check *Is Kinematic*. This prevents the obstacles from being affected by gravity.

![Is Kinematic screenshot](/images/unity3d-flappy-bird/iskinematic.png)

Create another script called <code>Obstacle.cs</code> and place it in the <code>Scripts</code> folder. This script will be used to move the rocks from the right of the screen to the left. Fill this file with this code:
{% highlight csharp %}
using UnityEngine;

public class Obstacle : MonoBehaviour
{
	public Vector2 velocity = new Vector2(-4, 0);
	
	// Use this for initialization
	void Start()
	{
		rigidbody2D.velocity = velocity;
	}
}
{% endhighlight %}
The <code>Start</code> method runs once, when the GameObject is created. In this case, we are setting the object's velocity to be <code>-4</code> in the <code>x</code> direction.

Add this script to the RockPair GameObject and hit the Play button. You should see the obstacles move across the screen.

## Generating obstacles
We need to create new rock obstacles every few seconds. To begin, drag the RockPair Object into the <code>Prefabs</code> folder. This turns RockPair into a Prefab, which is an object that can be created and destroyed many times. Delete the RockPair object that is in the scene.

<video height="762" width="1228" playsinline autoplay muted loop tabindex="-1" class="oversized"><source src="/images/unity3d-flappy-bird/CreepyFrayedDragonfly.webm" type="video/webm"></video>

Create another Empty GameObject and rename it to "Scripts". Create another Script called <code>Generate.cs</code>. Paste this code into it and add the Generate script to the Scripts empty GameObject.
{% highlight csharp %}
using UnityEngine;

public class Generate : MonoBehaviour
{
	public GameObject rocks;
	
	// Use this for initialization
	void Start()
	{
		InvokeRepeating("CreateObstacle", 1f, 1.5f);
	}
	
	void CreateObstacle()
	{
		Instantiate(rocks);
	}
}
{% endhighlight %}

In this script, we use the <code>InvokeRepeating</code> method. This will call a specific function once every several seconds. The first parameter is a string with the name of the method to call. The second is the number of seconds to delay these repeated calls. And the third parameter is the number of seconds between method calls.

In the <code>CreateObstacle</code> method, we use <code>Instantiate</code>, a method that will generate a new prefab to the scene. And the prefab that we add to the scene is a variable called <code>rocks</code>. This variable isn't linked to our RockPair prefab yet though. To do this, drag the RockPair prefab from its folder into the empty field that says rocks in the Inspector. Follow this video:

<video height="762" width="1228" playsinline autoplay muted loop tabindex="-1" class="oversized"><source src="/images/unity3d-flappy-bird/TartSmoothAlaskajingle.webm" type="video/webm"></video>

Try running the code. You should see obstacles being generated every 1.5 seconds!

## Killing the Player
You may have noticed that running into the obstacles doesn't do anything. Let's make something happen because of this collision.

Click on the player GameObject. Add a component called "Box Collider 2D".

Now go to the RockPair prefab and click on the small arrow. Select the first object and add a component called "Polygon Collider 2D". Do the same for the other Obstacle.

A Collider component is a shape that triggers collisions to happen. Play the game and see what happens. It's a really interesting thing to watch.

<video height="762" width="1228" playsinline autoplay muted loop tabindex="-1" class="oversized"><source src="/images/unity3d-flappy-bird/NeighboringHeavenlyKodiakbear.webm" type="video/webm"></video>

When the player collides with the obstacle, let's make the game restart. We're going to edit the <code>Player.cs</code> file to do this. Open the file up and edit it to look like this:

{% highlight csharp %}
using UnityEngine;

public class Player : MonoBehaviour
{
	// The force which is added when the player jumps
	// This can be changed in the Inspector window
	public Vector2 jumpForce = new Vector2(0, 300);
	
	// Update is called once per frame
	void Update ()
	{
		// Jump
		if (Input.GetKeyUp("space"))
		{
			rigidbody2D.velocity = Vector2.zero;
			rigidbody2D.AddForce(jumpForce);
		}
		
		// Die by being off screen
		Vector2 screenPosition = Camera.main.WorldToScreenPoint(transform.position);
		if (screenPosition.y > Screen.height || screenPosition.y < 0)
		{
			Die();
		}
	}
	
	// Die by collision
	void OnCollisionEnter2D(Collision2D other)
	{
		Die();
	}
	
	void Die()
	{
		Application.LoadLevel(Application.loadedLevel);
	}
}
{% endhighlight %}

- Inside the <code>Update</code> method, we've added some lines of code that check if the player's position is inside the screen or not. If it's not, the player will die.
	- <code>transform</code> holds the position, rotation, and scale of whatever GameObject the script is attached to.
- The <code>Die</code> method will cause the level to reset.
- The <code>OnCollisionEnter2D</code> method is called whenever there is a collision detected between two GameObjects that have Collider 2D components.

Run the game. The game should restart every time the player crashes or goes off screen.

## Add a touch of randomness
If you try to play the game now, it can be a little... boring. We need to vary the height of the rocks to make it more challenging. Update your <code>Obstacle.cs</code> file.
{% highlight csharp %}
using UnityEngine;

public class Obstacle : MonoBehaviour
{
	public Vector2 velocity = new Vector2(-4, 0);
	public float range = 4;
	
	// Use this for initialization
	void Start()
	{
		rigidbody2D.velocity = velocity;
		transform.position = new Vector3(transform.position.x, transform.position.y - range * Random.value, transform.position.z);
	}
}
{% endhighlight %}
- The <code>range</code> variable is a range of randomness. The higher this number is, the greater the variation the rocks will be. You may need to adjust this value to fit your game.
- When the object is first created, we move its position down a random amount.

## Keeping score
Finally, let's keep score. Update the <code>Generate.cs</code> file to look like this:
{% highlight csharp %}
using UnityEngine;

public class Generate : MonoBehaviour
{
	public GameObject rocks;
	int score = 0;
	
	// Use this for initialization
	void Start()
	{
		InvokeRepeating("CreateObstacle", 1f, 1.5f);
	}
	
	// Update is called once per frame
	void OnGUI () 
	{
		GUI.color = Color.black;
		GUILayout.Label(" Score: " + score.ToString());
	}
	
	void CreateObstacle()
	{
		Instantiate(rocks);
		score++;
	}
}
{% endhighlight %}

- We now have an integer used to keep the <code>score</code>
- The <code>OnGUI</code> method is called several times a frame and is used for displaying text and buttons. Here we display the score in the top left of the screen in black text.
- Every time a new obstacle is created, a point is added.

## Save your work
Go to *File*->*Save* and save this level into the <code>Scenes</code> folder, named <code>Play.unity</code>. Breathe a sigh of contentment.

## That's all folks!
Congratulations! You've made a Flappy Bird clone in Unity. Feel free to change this game and work on your own ideas and art.
Here are a couple ideas on things to change:

- Right now, we create new obstacles, but never destroy them. After a while of running, the game could slow down a lot.
- There is no proper menu or play screen.

Thanks for reading! If you enjoyed this please share, and if you have any questions, feel free to [ask me](http://anwell.me/).
