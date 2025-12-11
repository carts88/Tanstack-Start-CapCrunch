import { createFileRoute } from '@tanstack/react-router'
import { Separator } from '@/components/ui/separator';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Heart, Mail } from 'lucide-react';

export const Route = createFileRoute('/about')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
      <div className="bg-background">
      <div className="container max-w-5xl mx-auto px-4 py-12 space-y-8">
        {/* Hero Section */}
        <div className="text-center space-y-4">
          
          <h1 className="text-4xl font-bold tracking-tight text-foreground">About Cap Crunch</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Your comprehensive NHL salary cap and roster management tool
          </p>
        </div>

        <Separator className="my-8" />

        {/* Mission Statement */}
        <Card className="bg-card">
          <CardHeader>
            <CardTitle className="text-2xl">About Me!</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
          <p className="text-muted-foreground leading-relaxed">
            Hi, I'm Carter! I'm currently a freshman in college studying Computer Science. Growing up, I've always had a deep passion for hockey. I was only two weeks old when I attended my first Flyers game — a 9-1 loss to the Buffalo Sabres. Despite the rough start, a lifelong hockey fan was born.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            That passion has stuck with me ever since. My family would probably say hockey makes up at least half of my personality. Beyond the game itself, I’ve always been fascinated by the business side of the league. My interest only grew when I discovered CapFriendly — it taught me the ins and outs of the CBA and salary cap, while letting me enjoy the fun of playing “pretend GM.” When CapFriendly was sold, I was admittedly disappointed, but it also motivated me to create something that gives fans the same sense of joy and connection to the NHL that CapFriendly gave me.
          </p>

          </CardContent>
        </Card>

        <Card className="bg-card">
          <CardHeader>
            <CardTitle className="text-2xl">The CapCrunch Mission</CardTitle>
            <CardDescription className="text-base">Empowering hockey fans with data</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground leading-relaxed">
              CapCrunch was born from a passion for hockey and a need for accessible, reliable salary cap information. 
              That being said we'd like to provide fans with as much of the functionality that CapFriendly had, and then some. 
              Not only do we want to create more informed hockey fans, we'd like to grow the game. 
            </p>
            <p className="text-muted-foreground leading-relaxed">
              We're committed to providing to making this website the ultimate resource for people involved with hockey at every level. Thats means fans, scouts, agents, NHLers, journalists and all the rest.
            </p>
          </CardContent>
        </Card>

               <Card className="bg-card">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Heart className="w-5 h-5 text-primary" />
              Giving Back to The Community
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-muted-foreground leading-relaxed">
              CapCrunch is built for the hockey community, by hockey fans, so we'd like to encourage giving back to the community.
            </p>
            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-foreground">Charities We Support</h3>
              <div className="space-y-2">
                <div className="flex items-start gap-3 p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors">
                  <Heart className="w-4 h-4 text-primary mt-1 shrink-0" />
                  <span className="text-foreground">John & Matthew Gaudreau Foundation</span>
                </div>
                <div className="flex items-start gap-3 p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors">
                  <Heart className="w-4 h-4 text-primary mt-1 shrink-0" />
                  <span className="text-foreground">USA Hockey Foundation</span>
                </div>
                <div className="flex items-start gap-3 p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors">
                  <Heart className="w-4 h-4 text-primary mt-1 shrink-0" />
                  <span className="text-foreground">Crohn's and Colitis Foundation</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Contact Section */}
        <Card className="bg-card">
          <CardHeader>
            <CardTitle>Get in Touch</CardTitle>
            <CardDescription>Questions, feedback, or suggestions? We'd love to hear from you</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors cursor-pointer">
              <Mail className="w-5 h-5" />
              <span>contact@capcrunch.com</span>
            </div>
          </CardContent>
        </Card>

        {/* Footer Note */}
        <div className="text-center text-sm text-muted-foreground pt-4">
          <p>Cap Crunch is an independent project and is not affiliated with the NHL</p>
        </div>
      </div>
    </div>

)
}
