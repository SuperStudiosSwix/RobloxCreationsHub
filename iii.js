var cp1 = [`local player = game.Players.LocalPlayer
local char = player.Character
local RunService = game:GetService("RunService")

char.Humanoid.CameraOffset = Vector3.new(0, 0, -1)

for i, v in pairs(char:GetChildren()) do
 if v:IsA("BasePart") and v.Name ~= "Head" then

  v:GetPropertyChangedSignal("LocalTransparencyModifier"):Connect(function()
   v.LocalTransparencyModifier = v.Transparency
  end)

  v.LocalTransparencyModifier = v.Transparency

 end
end

RunService.RenderStepped:Connect(function(step)
 local ray = Ray.new(char.Head.Position, ((char.Head.CFrame + char.Head.CFrame.LookVector * 2) - char.Head.Position).Position.Unit)
 local ignoreList = char:GetChildren()

 local hit, pos = game.Workspace:FindPartOnRayWithIgnoreList(ray, ignoreList)

 if hit then
  char.Humanoid.CameraOffset = Vector3.new(0, 0, -(char.Head.Position - pos).magnitude)
 else
  char.Humanoid.CameraOffset = Vector3.new(0, 0, -1)
 end
end)`,];
var s1 = document.getElementById('script1')
var textc1 = document.getElementById('script1');
var btn1 = document.getElementById('copy')
function copytext1() {
   
navigator.clipboard.writeText(cp1[0]);
btn1.innerText = "copied👌"
s1.style.backgroundColor = 'green'
};
