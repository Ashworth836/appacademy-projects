
# Your code here
import random

def chat():
    coworkers = ["Jack", "Lenny", "Michelle", "Andrea"]
    # chatee = coworkers[Math.floor(Math.random()*4)]
    chatee = random.choice(coworkers)
    print("Chatting with " + chatee + "...")
    print("Done")


def getWater():
    print("Getting water...")
    print("That was refreshing.")


def useSocialMedia():
    socialMedia = ["FaceBook", "Twitter", "YouTube", "Reddit"]
    # choice = socialMedia[Math.floor(Math.random()*4)]
    choice = random.choice(socialMedia)
    print("Using " + choice + "...")
    print("Done")

