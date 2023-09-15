export const examplePythonScript = `

from promplate.llm.openai import ChatComplete
from promplate import Node

reply = Node("""
<| system |>
Now is {{ time.localtime() }}
<| user |>
What the time is it?
""".strip(), temperature=0.8)

translate = Node("""
Translate the following dialog to \`ja_JP\`:
{{ name.title() }}: {{ __result__ }}
""".strip(), temperature=0.2)

chain = reply + translate

# >>> print(chain)
# </reply/> + </translate/>

complete = ChatComplete(model="gpt-3.5-turbo")

def main():
    """🚀 run the chain"""

    import time

    name = "John"

    return chain.run(locals(), complete)["__result__"]


print(main())  # ジョン：現在の時刻は午前2時11分です。

`.trim();
