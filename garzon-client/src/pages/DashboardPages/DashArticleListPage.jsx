import { useEffect, useMemo, useState } from "react";
import { toast } from "sonner";
import {
  Alert,
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControlLabel,
  Stack,
  Switch,
  TextField,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { DataGrid } from "@mui/x-data-grid";
import {
  createArticle,
  deleteArticle,
  fetchArticles,
  updateArticle,
} from "../../services/ArticleService";

const blankForm = {
  name: "",
  title: "",
  image: "",
  content: "",
  isFeatured: false,
  isActive: true,
};

const panelSx = {
  borderRadius: "24px",
  backgroundColor: "hsl(var(--card) / 0.74)",
  border: "1px solid hsl(var(--border) / 0.85)",
  boxShadow: "0 24px 80px rgb(0 0 0 / 0.28)",
  backdropFilter: "blur(18px)",
  overflow: "hidden",
};

const inputSx = {
  "& .MuiOutlinedInput-root": {
    borderRadius: "14px",
    color: "hsl(var(--foreground))",
    backgroundColor: "hsl(var(--card) / 0.55)",
    "& fieldset": { borderColor: "hsl(var(--border) / 0.85)" },
    "&:hover fieldset": { borderColor: "hsl(var(--primary) / 0.55)" },
    "&.Mui-focused fieldset": { borderColor: "hsl(var(--primary))" },
    "&.Mui-disabled": {
      backgroundColor: "hsl(var(--foreground) / 0.35)",
      opacity: 0.8,
    },
  },
  "& .MuiInputBase-input, & .MuiInputBase-inputMultiline": {
    color: "hsl(var(--foreground))",
  },
  "& .MuiInputBase-input.Mui-disabled": {
    WebkitTextFillColor: "hsl(var(--muted-foreground))",
  },
  "& .MuiInputLabel-root": { color: "hsl(var(--muted-foreground))" },
  "& .MuiInputLabel-root.Mui-focused": { color: "hsl(var(--primary))" },
  "& .MuiFormHelperText-root": { color: "#fca5a5" },
};

const dataGridSx = {
  minWidth: 1100,
  border: "none",
  color: "hsl(var(--foreground))",
  backgroundColor: "transparent",
  "& .MuiDataGrid-columnHeader": {
    backgroundColor: "hsl(var(--primary) / 0.16)",
    borderBottom: "1px solid hsl(var(--border))",
  },
  "& .MuiDataGrid-columnHeaderTitle": {
    color: "hsl(var(--background))",
    fontWeight: 600,
  },
  "& .MuiDataGrid-cell": {
    color: "hsl(var(--foreground))",
    borderColor: "hsl(var(--border) / 0.65)",
    display: "flex",
    alignItems: "center",
  },
  "& .MuiDataGrid-row:hover": { backgroundColor: "hsl(var(--primary) / 0.08)" },
  "& .MuiDataGrid-footerContainer": {
    borderColor: "hsl(var(--border))",
    color: "hsl(var(--foreground))",
    backgroundColor: "hsl(var(--card) / 0.55)",
  },
  "& .MuiTablePagination-root, & .MuiTablePagination-selectLabel, & .MuiTablePagination-displayedRows, & .MuiTablePagination-actions button":
    { color: "hsl(var(--foreground))" },
};

const slugify = (value) =>
  value
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

const normalizeArticle = (article, index = 0) => ({
  id: article._id || article.id || index + 1,
  articleId: article.articleId || "",
  name: article.name || "",
  title: article.title || "",
  image: article.image || "",
  content: Array.isArray(article.content) ? article.content : [],
  isFeatured:
    typeof article.isFeatured === "boolean" ? article.isFeatured : false,
  isActive: typeof article.isActive === "boolean" ? article.isActive : true,
});

const pillSx = (type, value) => {
  const isOn = Boolean(value);

  const colors = {
    active: {
      onBg: "hsl(142 72% 29% / 0.9)",
      onText: "white",
      offBg: "hsl(var(--card) / 0.8)",
      offText: "hsl(var(--foreground))",
    },
    featured: {
      onBg: "hsl(217 91% 60% / 0.9)",
      onText: "white",
      offBg: "hsl(var(--card) / 0.8)",
      offText: "hsl(var(--foreground))",
    },
  };

  const colorSet = colors[type];

  return {
    px: 0.5,
    py: 1.5,
    color: isOn ? colorSet.onText : colorSet.offText,
    backgroundColor: isOn ? colorSet.onBg : colorSet.offBg,
    border: "1px solid hsl(var(--border))",
  };
};

const DashArticleListPage = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [articles, setArticles] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [modal, setModal] = useState({ open: false, id: null });
  const [form, setForm] = useState(blankForm);
  const [errors, setErrors] = useState({});
  const [loadError, setLoadError] = useState("");
  const [isSaving, setIsSaving] = useState(false);

  const loadArticles = async () => {
    try {
      const { data } = await fetchArticles();
      setArticles((data.articles || []).map(normalizeArticle));
      setLoadError("");
    } catch (error) {
      const message =
        error.response?.data?.message ||
        "Unable to load articles from the backend.";

      setLoadError(message);
      toast.error(message);
    }
  };

  useEffect(() => {
    loadArticles();
  }, []);

  const openModal = (article) => {
    setModal({ open: true, id: article?.id ?? null });
    setForm(
      article
        ? { ...article, content: article.content.join("\n\n") }
        : { ...blankForm },
    );
    setErrors({});
  };

  const closeModal = () => {
    setModal({ open: false, id: null });
    setForm(blankForm);
    setErrors({});
  };

  const handleChange = ({ target: { name, value, checked, type } }) => {
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));

    setErrors((prev) => ({ ...prev, [name]: "", form: "" }));
  };

  const validate = () => {
    const nextErrors = {};
    if (!form.title.trim()) nextErrors.title = "Title is required.";
    if (!form.name.trim()) nextErrors.name = "Article slug is required.";
    if (!form.content.trim()) nextErrors.content = "Content is required.";
    return nextErrors;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const nextErrors = validate();

    if (Object.keys(nextErrors).length) {
      setErrors(nextErrors);
      return;
    }

    setIsSaving(true);

    const payload = {
      name: slugify(form.name),
      title: form.title.trim(),
      image: form.image.trim(),
      isFeatured: form.isFeatured,
      isActive: form.isActive,
      content: form.content
        .split(/\n{2,}/)
        .map((paragraph) => paragraph.trim())
        .filter(Boolean),
    };

    try {
      if (modal.id) {
        await updateArticle(modal.id, payload);
        toast.success("Article updated successfully.");
      } else {
        await createArticle(payload);
        toast.success("Article created successfully.");
      }

      await loadArticles();
      closeModal();
    } catch (error) {
      const message =
        error.response?.data?.message ||
        "Unable to save article. Please try again.";

      setErrors((prev) => ({
        ...prev,
        form: message,
      }));
      toast.error(message);
    } finally {
      setIsSaving(false);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteArticle(id);
      setArticles((prev) => prev.filter((article) => article.id !== id));
      toast.success("Article deleted successfully.");
    } catch (error) {
      const message =
        error.response?.data?.message ||
        "Unable to delete article. Please try again.";

      setLoadError(message);
      toast.error(message);
    }
  };

  const filteredArticles = useMemo(() => {
    const query = searchTerm.trim().toLowerCase();
    if (!query) return articles;

    return articles.filter((article) =>
      [article.title, article.name, article.content.join(" ")]
        .join(" ")
        .toLowerCase()
        .includes(query),
    );
  }, [articles, searchTerm]);

  const columns = [
    {
      field: "articleId",
      headerName: "ID",
      minWidth: 220,
      flex: 1,
      renderCell: ({ value }) => (
        <Typography
          variant="caption"
          sx={{
            color: "hsl(var(--muted-foreground))",
            fontFamily: "monospace",
            whiteSpace: "nowrap",
          }}
        >
          {value}
        </Typography>
      ),
    },
    { field: "name", headerName: "Article-Slug", flex: 1, minWidth: 220 },
    { field: "title", headerName: "Title", flex: 1.2, minWidth: 240 },
    {
      field: "content",
      headerName: "Paragraphs",
      width: 130,
      valueGetter: (_, row) => row.content.length,
    },
    {
      field: "contentPreview",
      headerName: "Preview",
      flex: 1.8,
      minWidth: 320,
      sortable: false,
      valueGetter: (_, row) => {
        const preview = Array.isArray(row.content) ? row.content.join(" ") : "";

        return preview.length > 50 ? `${preview.slice(0, 50)}...` : preview;
      },
      renderCell: ({ value }) => (
        <Typography
          variant="body2"
          sx={{
            color: "hsl(var(--muted-foreground))",
            whiteSpace: "normal",
            lineHeight: 1.4,
            py: 1,
          }}
        >
          {value || "No content"}
        </Typography>
      ),
    },
    {
      field: "isFeatured",
      headerName: "Featured",
      width: 130,
      renderCell: ({ value }) => (
        <Chip
          size="small"
          label={value ? "Featured" : "Standard"}
          sx={pillSx("featured", value)}
        />
      ),
    },
    {
      field: "isActive",
      headerName: "Status",
      width: 120,
      renderCell: ({ value }) => (
        <Chip
          size="small"
          label={value ? "Active" : "Inactive"}
          sx={pillSx("active", value)}
        />
      ),
    },
    {
      field: "actions",
      headerName: "Actions",
      minWidth: 190,
      sortable: false,
      filterable: false,
      renderCell: ({ row }) => (
        <Stack direction="row" spacing={1} sx={{ py: 0.5 }}>
          <Button
            size="small"
            variant="outlined"
            onClick={() => openModal(row)}
          >
            Edit
          </Button>
          <Button
            size="small"
            color="error"
            variant="contained"
            onClick={() => handleDelete(row.id)}
          >
            Delete
          </Button>
        </Stack>
      ),
    },
  ];

  return (
    <Box sx={{ width: "100%", maxWidth: "100%", overflowX: "hidden" }}>
      <Stack direction={{ xs: "column", sm: "row" }} spacing={2} sx={{ mb: 3 }}>
        <Box sx={{ flex: 1 }}>
          <Typography
            variant="h4"
            sx={{ fontWeight: 900, letterSpacing: "-0.04em" }}
          >
            Articles
          </Typography>
          <Typography
            variant="body2"
            sx={{ mt: 0.5, color: "hsl(var(--muted-foreground))" }}
          >
            Add and manage article records shown on the public Articles page.
          </Typography>
        </Box>

        <Button
          variant="contained"
          onClick={() => openModal()}
          sx={{ borderRadius: "14px", textTransform: "none", fontWeight: 800 }}
        >
          Add Article
        </Button>
      </Stack>

      {loadError ? (
        <Alert severity="error" sx={{ mb: 2 }}>
          {loadError}
        </Alert>
      ) : null}

      <Card sx={{ ...panelSx, mb: 2.5 }}>
        <CardContent>
          <TextField
            placeholder="Search by title, slug, or content..."
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
            fullWidth
            sx={inputSx}
          />
        </CardContent>
      </Card>

      <Card sx={panelSx}>
        <CardContent sx={{ overflow: "hidden" }}>
          <Box sx={{ height: 520, width: "100%", overflowX: "auto" }}>
            <DataGrid
              rows={filteredArticles}
              columns={columns}
              disableRowSelectionOnClick
              pageSizeOptions={[5, 10]}
              initialState={{
                pagination: { paginationModel: { pageSize: 5, page: 0 } },
              }}
              sx={dataGridSx}
            />
          </Box>
        </CardContent>
      </Card>

      <Dialog
        open={modal.open}
        onClose={closeModal}
        fullWidth
        fullScreen={isMobile}
        maxWidth="md"
        slotProps={{
          paper: {
            sx: {
              borderRadius: { xs: 0, sm: "16px" },
              backgroundColor: "hsl(var(--card))",
              color: "hsl(var(--foreground))",
              border: "1px solid hsl(var(--border))",
              backgroundImage: "none",
              width: { xs: "100%", sm: "min(92vw, 860px)" },
              maxWidth: "none",
              maxHeight: { xs: "100dvh", sm: "92vh" },
              m: { xs: 0, sm: 2 },
              overflowX: "hidden",
            },
          },
        }}
      >
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{
            width: "100%",
            maxWidth: "100%",
            maxHeight: { xs: "100dvh", sm: "92vh" },
            display: "flex",
            flexDirection: "column",
            overflow: "hidden",
          }}
        >
          <DialogTitle
            sx={{
              px: 3.5,
              py: 2.5,
              borderBottom: "1px solid hsl(var(--border))",
            }}
          >
            {modal.id ? "Edit Article" : "Add Article"}
          </DialogTitle>

          <DialogContent>
            <Stack
              spacing={3}
              sx={{
                pt: 2,
                width: "100%",
                maxWidth: "100%",
                minWidth: 0,
                overflowX: "hidden",
              }}
            >
              {errors.form ? (
                <Alert severity="error">{errors.form}</Alert>
              ) : null}
              <Stack
                direction={{ xs: "column", sm: "row" }}
                spacing={2}
                sx={{
                  width: "100%",
                  maxWidth: "100%",
                  "& > *": {
                    flex: 1,
                    minWidth: 0,
                  },
                }}
              >
                <TextField
                  name="name"
                  label="Article-Slug"
                  value={form.name}
                  onChange={handleChange}
                  error={Boolean(errors.name)}
                  helperText={
                    errors.name ||
                    "Use lowercase letters, numbers, and hyphens only."
                  }
                  fullWidth
                  sx={inputSx}
                />

                <TextField
                  name="title"
                  label="Title"
                  value={form.title}
                  onChange={handleChange}
                  error={Boolean(errors.title)}
                  helperText={errors.title}
                  fullWidth
                  sx={inputSx}
                />
              </Stack>

              <TextField
                name="content"
                label="Content"
                value={form.content}
                onChange={handleChange}
                error={Boolean(errors.content)}
                helperText={
                  errors.content || "Separate paragraphs with a blank line."
                }
                multiline
                minRows={isMobile ? 4 : 5}
                maxRows={isMobile ? 6 : 8}
                fullWidth
                sx={inputSx}
              />

              <FormControlLabel
                control={
                  <Switch
                    name="isFeatured"
                    checked={form.isFeatured}
                    onChange={handleChange}
                  />
                }
                label={`Featured: ${form.isFeatured ? "Yes" : "No"}`}
              />

              <FormControlLabel
                control={
                  <Switch
                    name="isActive"
                    checked={form.isActive}
                    onChange={handleChange}
                  />
                }
                label={`Status: ${form.isActive ? "Active" : "Inactive"}`}
              />
            </Stack>
          </DialogContent>

          <DialogActions
            sx={{
              px: 3.5,
              py: 3,
              borderTop: "1px solid hsl(var(--border))",
              backgroundColor: "hsl(var(--background) / 0.35)",
              justifyContent: "flex-end",
              gap: 1.25,
            }}
          >
            <Button
              onClick={closeModal}
              sx={{
                textTransform: "uppercase",
                color: "hsl(var(--primary))",
              }}
            >
              Cancel
            </Button>

            <Button
              type="submit"
              variant="contained"
              disabled={isSaving}
              sx={{ textTransform: "uppercase" }}
            >
              {isSaving
                ? "Saving..."
                : modal.id
                  ? "Update Article"
                  : "Save Article"}
            </Button>
          </DialogActions>
        </Box>
      </Dialog>
    </Box>
  );
};

export default DashArticleListPage;
