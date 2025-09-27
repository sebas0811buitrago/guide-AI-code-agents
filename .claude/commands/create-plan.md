Break down feature requirements into 4 execution plans following clean architecture patterns.

**Requirements:**
{{ $ARGUMENTS }}

**Steps:**
1. **Domain Plan** - Review `.claude/prompts/domain-template.md` → Create `.claude/features/<feature>/domain.md`
2. **Services Plan** - Review `.claude/prompts/services-template.md` → Create `.claude/features/<feature>/services.md`
3. **Hooks Plan** - Review `.claude/prompts/hooks-template.md` → Create `.claude/features/<feature>/hooks.md`
4. **Components Plan** - Review `.claude/prompts/components-template.md` → Create `.claude/features/<feature>/components.md`

**Note:** Ask for module folder location if not specified. Request clarification for incomplete requirements.
